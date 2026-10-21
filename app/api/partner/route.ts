import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// Server-side validation before inserting partner data to database
export async function POST(request: Request) {

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
        "partnershipReason"
    ];

    // Define the valid partnership types
    const validPartnershipTypes = ["Vendor", "Exhibitor", "Partner"];

    // Check for any missing fields 
    for (const field of requiredFields) {
        if (!data[field]) {
            return NextResponse.json(
                { error: `Missing required field: ${field}` },
                { status: 400 }
            )
        }
    }

    // Verify partnership type
    if (!validPartnershipTypes.includes(data.partnershipType)) {
        return NextResponse.json(
            { error: "Invalid partnership type" },
            { status: 400 }
        )
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
        partnership_reason: data.partnershipReason
    })

    // Check for any server errors when inserting partnership data into database
    if (error) {
        console.error("Supabase insert error: ", error);
        return NextResponse.json(
            { error: "Something went wrong saving your partnership inquiry." },
            { status: 500 }
        );
    }

    return NextResponse.json(
        { success: true },
        { status: 201 }
    )
}