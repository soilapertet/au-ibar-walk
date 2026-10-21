import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

// Server-side validation before inserting registrant data to database
export async function POST(request: Request) {

    // Save the data sent from the client
    const data = await request.json();

        
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(?:\+254|0)[17]\d{8}$/;

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

    const formatFieldName = (field: string) => {

        const labels: Record<string, string> = {
            firstName : "First Name",
            lastName : "Last Name",
            telephone : "Telephone Number",
            email: "Email Address",
            nationality : "Nationality",
            age : "Age",
            gender : "Gender",
            tshirtSize : "T-Shirt Size",
            registrationType : "Registration Type",
            groupSize : "Group Size",
        };

        return labels[field] || field;
    }

    // Define the valid registration types
    const validRegistrationType = ["Individual Participant", "Corporate Group", "Child"];

    // Check for any missing fields 
    for (const field of requiredFields) {
        if (!data[field]) {
            return NextResponse.json(
                { error: `Please fill in the required field: ${formatFieldName(field)}` },
                { status: 400 }
            )
        }

        // Verify user entered a valid email
        if(!emailRegex.test(data.email)) {
            return NextResponse.json(
                { error : "Please enter a valid email address" },
                { status: 400 }
            )
        }

        // Verify user entered a valid email
        if(!phoneRegex.test(data.telephone)) {
            return NextResponse.json(
                { error : "Please enter a valid telephone number" },
                { status: 400 }
            )
        }
    }

    // Verify registration type
    if(!validRegistrationType.includes(data.registrationType)) {
        return NextResponse.json(
            { error: "Please choose a valid registration option." },
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
            { error: "We ran into an issue submitting your registration. Please check your details and try again." },
            { status: 500 }
        )
    }

    return NextResponse.json(
        { success: true },
        { status: 201 }
    )
}