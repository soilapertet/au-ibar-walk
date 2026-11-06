import crypto from "crypto";

interface PaymentHashInput {
    requestId: string;
    mobileNo: string;
    amount: number;
    customerName: string;
}

// Initialize the constants
const BASE_URL = process.env.ECOBANK_BASE_URL!;
const USER_ID = process.env.ECOBANK_USER_ID!;
const PASSWORD = process.env.ECOBANK_PASSWORD!;
const AFFLIATE_CODE = process.env.ECOBANK_AFFLIATE_CODE!;
const CLIENT_ID = process.env.ECOBANK_CLIENT_ID!;
const PARTNER_LAB_KEY = process.env.ECOBANK_PARTNER_LAB_KEY!;

const NARRATION = "Payment of service";
const CURRENCY = "KES"

// --- Token caching --- //
// Cache the time-bound token in memory so that we don't fetch a new token with each
// single payment request
let cachedToken: string | null = null;
let tokenExpiresAt = 0;

// Set the token's lifetime to 10 minutes
// Assume that token is only valid for 10 minutes before refreshing
const TOKEN_TTL_MS = 10 * 60 * 1000;

// API call to fetch username and token for API sessions
async function getBearerToken(): Promise<string> {

    // Get the current time
    const now = Date.now();

    // Check if a token is valid i.e. not null and not expired
    if (cachedToken && now < tokenExpiresAt) {
        return cachedToken;
    }

    // Generate new token if null or expired
    const response = await fetch(`${BASE_URL}/corporateapi/user/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: USER_ID,
            password: PASSWORD
        })
    });

    // Throw error if an error occurred while making the request
    if (!response.ok) {
        throw new Error(`Failed to obtain Ecobank bearer token (${response.status}).`)
    }

    // Extract the token and start timer
    const data = await response.json();
    cachedToken = data.token;
    tokenExpiresAt = now + TOKEN_TTL_MS;
    return cachedToken!;
}

// Create a function that generates the secure hash for initializing payment
function generatePaymentHash(fields: PaymentHashInput): string {

    const hashString =
        fields.requestId +
        AFFLIATE_CODE +
        CLIENT_ID +
        fields.mobileNo +
        fields.amount +
        NARRATION +
        CURRENCY +
        fields.customerName +
        PARTNER_LAB_KEY;

    return crypto.createHash("sha512").update(hashString).digest("hex");
}

// Create a function that generates the secure hash for tracking transaction status
function generateStatusHash(fields: {
    requestId: string;
    transactionReference: string;
}): string {

    const hashString =
        fields.requestId +
        AFFLIATE_CODE +
        CLIENT_ID +
        fields.transactionReference +
        PARTNER_LAB_KEY;

    return crypto.createHash("sha512").update(hashString).digest("hex");
}

// --- Payment Initiation --- ///
export async function initiatePayment(params: {
    mobileNo: string;
    amount: number;
    customerName: string;
}): Promise<{ transactionReference: string }> {

    const requestId = `PAY${params.amount}${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const token = await getBearerToken();
    const secureHash = generatePaymentHash({
        requestId,
        mobileNo: params.mobileNo,
        amount: params.amount,
        customerName: params.customerName
    })

    const response = await fetch(`${BASE_URL}/corporateapi/collections/v1.0/pay`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            requestId,
            affliateCode: AFFLIATE_CODE,
            clientId: CLIENT_ID,
            mobileNo: params.mobileNo,
            amount: params.amount,
            narration: NARRATION,
            currency: CURRENCY,
            customerName: params.customerName,
            secureHash,
        })
    });

    const result = await response.json();

    if(!response.ok || !result.isSuccess) {
        throw new Error(result.message || "An error occured while initializing payment");
    }

    return { transactionReference: result.transactionReference }
}

// --- Transaction Status Check --- //
export async function checkTransactionStauts(transactionReference : string) : Promise<string> {

    const token = await getBearerToken();
    const requestId = `TRNSTS${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const secureHash = generateStatusHash({
        requestId,
        transactionReference
    });

    const response = await fetch(`${BASE_URL}/corporateapi/collections/v1.0/status`, {
        method: "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            requestId,
            affliateCode: AFFLIATE_CODE,
            clientId: CLIENT_ID,
            transactionReference,
            secureHash
        })
    });

    const result = await response.json();

    if(!response.ok || !result.isSuccess) {
        throw new Error(result.message || "Failed to check transaction status");
    }

    return result.data;     // "SUCCESS" | "FAILED" | "PENDING"
}