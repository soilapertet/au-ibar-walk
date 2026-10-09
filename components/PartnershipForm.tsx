"use client";

import { useState } from "react";
import TermsModal from "./TermsModal";

interface PartnershipFormProps {
    onSuccess: () => void;
}

export default function PartnershipForm({ onSuccess }: PartnershipFormProps) {

    const [showTerms, setShowTerms] = useState(false);

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
            <form id="modalForm" onSubmit={handleSubmit}>
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
                        <label>Organisation Name</label>
                        <input name="organisation" placeholder="e.g. Safaricom, UNICEF Kenya" required />
                    </div>
                    <div className="field">
                        <label>Country</label>
                        <input name="country" placeholder="e.g. Kenya" required />
                    </div>
                    <div className="field full">
                        <label>Why would you like to partner with the AU-IBAR Walk?</label>
                        <textarea
                            name="message"
                            placeholder="Tell us about your organisation/vendor/exhibition and how you'd like to support the AU-IBAR Walk"
                            required
                        ></textarea>
                    </div>
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
                <button className="submit" id="formSubmit">SUBMIT INTEREST</button>
            </form>
            <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
        </>
    )
}