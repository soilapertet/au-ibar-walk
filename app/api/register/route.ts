import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

const VALID_REGISTRATION_TYPES = ["Individual Participant", "Corporate Group", "Child"];
const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

// Server-side validation before inserting registrant data to database
export async function POST(request: Request) {

    // Save the data sent from the client
    const data = await request.json();

    // Define the regex for valid email and phone number
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(?:\+254|0)[17]\d{8}$/;

    // Define the required fields that's uniform per participant registrant
    const baseRequiredFields = [
        "firstName",
        "lastName",
        "telephone",
        "email",
        "nationality",
        "age",
        "gender",
        "registrationType"
    ];

    const formatFieldName = (field: string) => {

        const labels: Record<string, string> = {
            firstName: "First Name",
            lastName: "Last Name",
            telephone: "Telephone Number",
            email: "Email Address",
            nationality: "Nationality",
            age: "Age",
            gender: "Gender",
            registrationType: "Registration Type",
        };

        return labels[field] || field;
    }

    // --- DATA VALIDATION --- //
    for (const field of baseRequiredFields) {

        // Check for any missing required fields
        if (!data[field]) {
            return NextResponse.json(
                { error: `Please fill in the required field: ${formatFieldName(field)}.` },
                { status: 400 }
            )
        }

        // Verify user entered a valid email
        if (!emailRegex.test(data.email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400 }
            )
        }

        // Verify user entered a valid email
        if (!phoneRegex.test(data.telephone)) {
            return NextResponse.json(
                { error: "Please enter a valid telephone number." },
                { status: 400 }
            )
        }

        // Check if registration type is valid
        if (!VALID_REGISTRATION_TYPES.includes(data.registrationType)) {
            return NextResponse.json(
                { error: "Please choose a valid registration option." },
                { status: 400 }
            )
        }
    }

    // Check if the registrant agreed to the Terms and Conditions
    if (data.agreedToTerms !== "on") {
        return NextResponse.json(
            { error: "You must agree to the Terms and Conditions to participate in the AU-IBAR walk." },
            { status: 400 }
        )
    }

    // --- DATA STORAGE --- //
    const isCorporateGroup = data.registrationType === "Corporate Group";

    // Initialize variables for tshirt size data
    let tshirtSize: string | null = null;
    let tshirtBreakdown: Record<string, number> | null = null;
    let groupSize = 1;

    // Case 1: T-shirt size selection as a group
    if (isCorporateGroup) {

        // Initialize the group size to the user input
        groupSize = Number(data.groupSize) || 0;

        // Throw an error if group size is less than 1
        if (groupSize < 1) {
            return NextResponse.json(
                { error: "Group size must be at least 1." },
                { status: 400 }
            );
        }

        // Initialize object to store tshirt size and their corresponding quantity
        tshirtBreakdown = {};

        // Initilize a counter to keep track of the number of group tshirts (error-checking purposes)
        let totalEntered = 0;

        for (const size of TSHIRT_SIZES) {
            const qty = Number(data[`sizeQty-${size}`]) || 0;
            tshirtBreakdown[size] = qty;
            totalEntered += qty;
        }

        // Check if the # of tshirts is equal to the group size entered by the user
        if (totalEntered !== groupSize) {
            return NextResponse.json(
                { error: `Size quantities (${totalEntered}) must add up to the group size (${groupSize}).` },
                { status: 400 }
            )
        }

    }

    // Case 2: T-shirt size selection as an individual
    else {

        if (!data.tshirtSize) {
            return NextResponse.json(
                { error: "Please choose your preferred T-Shirt size." },
                { status: 400 }
            );
        }

        tshirtSize = data.tshirtSize;
    }

    // Map camelCase (frontend) to snake_case (database columns)
    const { error } = await supabase.from("participants").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        tel_number: data.telephone,
        email_address: data.email,
        nationality: data.nationality,
        age: Number(data.age),
        gender: data.gender,
        tshirt_size: tshirtSize,
        tshirt_breakdown: tshirtBreakdown,
        registration_type: data.registrationType,
        group_size: groupSize
    });

    // Check for any server errors when inserting registrant data into database
    if (error) {
        console.error("Supabase insert error: ", error);
        return NextResponse.json(
            { error: "We ran into an issue submitting your registration. Please check your details and try again." },
            { status: 500 }
        )
    }

    return NextResponse.json(
        { success: true },
        { status: 201 }
    )
}