"use client";
import { useState } from "react";
import TermsModal from "./TermsModal";
import { countriesData } from "@/data/countriesData";

interface RegistrationFormProps {
    onSuccess: () => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {

    const [showTerms, setShowTerms] = useState(false);
    const [participationType, setParticipationType] = useState("");

    // Review what's going in this function
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        onSuccess();
    }

    return (
        <>
            <form id="registrationForm" onSubmit={handleSubmit}>
                <div id="formFields" className="formgrid">
                    <div className="field">
                        <label>First Name</label>
                        <input name="first-name" required />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input name="last-name" required />
                    </div>
                    <div className="field">
                        <label>Telephone Number</label>
                        <input name="telephone" type="tel" inputMode="tel" placeholder="e.g. 0712 345 678" required />
                    </div>
                    <div className="field">
                        <label>Email Address</label>
                        <input name="email" type="email" required />
                    </div>
                    <div className="field">
                        <label>Nationality</label>
                        <select name="nationality" required defaultValue="">
                            <option value="" disabled>Select your nationality</option>
                            {countriesData.map((country) => (
                                <option key={country}>{country}</option>
                            ))};
                        </select>
                    </div>
                    <div className="field">
                        <label>Age</label>
                        <input name="age" type="number" min="1" max="120" required />
                    </div>
                    <div className="field">
                        <label>Gender</label>
                        <select name="gender" required>
                            <option value="" disabled>Select gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="X">Prefer not to say</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>T-shirt Size</label>
                        <select name="tshirt" required>
                            <option value="" disabled>Select size</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                            <option value="3XL">3XL</option>
                        </select>
                    </div>
                    <div className="field full">
                        <label>How would you like to take part?</label>
                        <select 
                            name="interest" 
                            required
                            value={participationType}
                            onChange={(e) => setParticipationType(e.target.value)}>
                            <option value="" disabled>Select an option</option>
                            <option value="Individual Participant">Individual Participant</option>
                            <option value="Corporate Group">Corporate Group</option>
                            <option value="Child">Child</option>
                        </select>
                    </div>
                    {participationType === "Corporate Group" && (
                        <div className="field">
                            <label>How many group members will be attending?</label>
                            <input name="groupSize" type="number" min="1" required></input>
                        </div>
                    )}
                </div>
                <div className="terms-check">
                    <label>
                        <input type="checkbox" name="agreedToTerms" required />
                        I agree to the{" "}
                        <button
                            type="button"
                            className="terms-link"
                            onClick={() => setShowTerms(true)}
                        >
                            Terms and Conditions
                        </button>
                    </label>
                </div>
                <button className="submit" id="formSubmit">SUBMIT REGISTRATION</button>
            </form>
            <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
        </>
    )
}