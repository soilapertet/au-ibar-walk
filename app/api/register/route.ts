import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// Server-side validation before inserting registrant data to database
export async function POST(request: Request) {

    // Save the data sent from the client
    const data = await request.json();

    // Define the required fields per participant registration
    const requiredFields = [
        "firstName",
        "lastName",
        "telephone",
        "email",
        "nationality",
        "age",
        "gender",
        "tshirtSize",
        "registrationType"
    ];

    // Define the valid registration types
    const validRegistrationType = ["Individual Participant", "Corporate Group", "Child"];

    // Check for any missing fields 
    for (const field of requiredFields) {
        if (!data[field]) {
            return NextResponse.json(
                { error: `Missing required field: ${field}` },
                { status: 400 }
            )
        }
    }

    // Verify registration type
    if(!validRegistrationType.includes(data.registrationType)) {
        return NextResponse.json(
            { error: "Invalid registration type." },
            { status: 400 }
        )
    }

    // Check if the registrant agreed to the Terms and Conditions
    if (data.agreedToTerms !== "on") {
        return NextResponse.json(
            { error: "You must agree to the Terms and Conditions to participate in the AU-IBAR walk" },
            { status: 400 }
        )
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
        tshirt_size: data.tshirtSize,
        registration_type: data.registrationType,
        group_size: data.groupSize ? Number(data.groupSize) : 1
    });

    // Check for any server errors when inserting registrant data into database
    if (error) {
        console.error("Supabase insert error: ", error);
        return NextResponse.json(
            { error: "Something went wrong saving your registration details." },
            { status: 500 }
        )
    }

    return NextResponse.json(
        { success: true },
        { status: 201 }
    )
}