import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// Define the valid partnership types
const VALID_PARTNERSHIP_TYPES = ["Vendor", "Exhibitor", "Partner"];

// Server-side validation before inserting partner data to database
export async function POST(request: Request) {

    // Define the regex for valid email and phone number
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(?:\+254|0)[17]\d{8}$/;

    // Save the data sent from the client
    const data = await request.json();

    // Define the required fields per partnership inquiry
    const requiredFields = [
        "firstName",
        "lastName",
        "telephone",
        "email",
        "organisation",
        "country",
        "partnershipType",
        "partnershipInquiry"
    ];

    const formatFieldName = (field: string) => {

        const labels: Record<string, string> = {
            firstName: "First Name",
            lastName: "Last Name",
            telephone: "Telephone Number",
            email: "Email Address",
            organisation: "Organisation Name",
            country: "Country",
            partnershipType: "Partnership Type",
            partnershipReason: "Partnership Inquiry"
        }
    }

    // Check for any missing fields 
    for (const field of requiredFields) {

        if (!data[field]) {
            return NextResponse.json(
                { error: `Please fill in the required field: ${formatFieldName(field)}.` },
                { status: 400 }
            )
        }

        // Validate the telephone number
        if(!phoneRegex.test(data.telephone)) {
            return NextResponse.json(
                { error: "Please enter a valid telephone number." },
                { status: 400 }
            )
        }
        // Validate the email
        if(!emailRegex.test(data.email)) {
            return NextResponse.json(
                { error: "Please enter a valid email address." },
                { status: 400}
            )
        }

        // Verify partnership type
        if (!VALID_PARTNERSHIP_TYPES.includes(data.partnershipType)) {
            return NextResponse.json(
                { error: "Please register with a valid partnership form." },
                { status: 400 }
            )
        }
    }

    // Check if the user agreed to the Terms and Conditions
    if (data.agreedToTerms !== "on") {
        return NextResponse.json(
            { error: `You must agree to the Terms and Conditions to partner with AU-IBAR.` },
            { status: 400 }
        )
    }

    // Map camelCase (frontend) to snake_case (database columns)
    const { error } = await supabase.from("partners").insert({
        first_name: data.firstName,
        last_name: data.lastName,
        tel_number: data.telephone,
        email_address: data.email,
        organisation: data.organisation,
        country: data.country,
        partnership_type: data.partnershipType,
        partnership_inquiry: data.partnershipInquiry
    })

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