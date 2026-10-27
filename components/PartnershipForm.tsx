"use client";

import { useState, useRef } from "react";
import TermsModal from "./TermsModal";
import { AlertCircle } from "lucide-react";

interface PartnershipFormProps {
    onSuccess: () => void;
    partnershipType : string;
}

export default function PartnershipForm({ onSuccess, partnershipType }: PartnershipFormProps) {

    const [showTerms, setShowTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Create a ref for the top of the registration form
    const topRef = useRef<HTMLDivElement>(null);

    function handleSetError(msg: string | null) {

        setError(msg);

        // Scroll to the top of the div element in case of an error, to display error message
        if (msg) {
            setTimeout(() => {
                topRef.current?.scrollIntoView({ behavior: "smooth" })
            }, 50)
        }
    }

    // Define a function to handle form submission
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        // Prevent the default full-reload submit behaviour
        e.preventDefault();

        // Clear any previous error messages
        setError(null);

        setLoading(true);

        // Parse the named form fields into a plain JS object
        const formData = new FormData(e.currentTarget);
        const data = {
            ...Object.fromEntries(formData.entries()),
            partnershipType
        }

        // Debugging purposes
        console.log("Form Data Entries: ", data);

        try {

            // Make a POST request to the partner api route
            const response = await fetch("/api/partnership-inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });

            // Parse the HTTP response into a JS object
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to submit registration. Please try again.");
            }

            onSuccess();

        } catch (err: any) {
            handleSetError(err.message || "An unexpected error occured.")
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div ref={topRef} style={{ marginTop: "10px" }}>
                <form id="modalForm" onSubmit={handleSubmit}>

                    {/* Display error banner with corresponding error message */}
                    {error && (
                        <div style={{
                            background: "#fdf3f2",
                            border: "1px solid #ebccd1",
                            borderRadius: "12px",
                            padding: "16px",
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px"
                        }}>
                            <div style={{ color: "#d9534f", flexShrink: 0, marginTop: "2px" }}>
                                <AlertCircle size={22} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: "800", color: "#a94442", fontSize: "13px", marginBottom: "4px" }}>
                                    REGISTRATION ERROR
                                </div>
                                <div style={{ color: "#333", fontSize: "14px", lineHeight: "1.4" }}>
                                    {error}
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleSetError(null)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "#a94442",
                                    fontWeight: "800",
                                    cursor: "pointer",
                                    fontSize: "12px",
                                    textDecoration: "underline"
                                }}
                            >
                                Dismiss
                            </button>
                        </div>
                    )}

                    <div id="formFields" className="formgrid">
                        <div className="field">
                            <label>First Name</label>
                            <input name="firstName" required />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input name="lastName" required />
                        </div>
                        <div className="field">
                            <label>Telephone Number</label>
                            <input
                                name="telephone"
                                type="tel"
                                inputMode="tel"
                                placeholder="e.g. 0712 345 678"
                                pattern="^(?:\+254|0)[17]\d{8}$"
                                onInvalid={(e) =>
                                    (e.target as HTMLInputElement).setCustomValidity(
                                        "Please enter a valid phone number (e.g., 0712345678 or +254712345678)"
                                    )
                                }
                                onInput={(e) =>
                                    (e.target as HTMLInputElement).setCustomValidity("")
                                }
                                required />
                        </div>
                        <div className="field">
                            <label>Email Address</label>
                            <input
                                name="email"
                                type="email"
                                inputMode="email"
                                placeholder="e.g. janedoe@example.com"
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                onInvalid={(e) =>
                                    (e.target as HTMLInputElement).setCustomValidity(
                                        "Please enter a valid email address (e.g., janedoe@example.com)"
                                    )
                                }
                                onInput={(e) =>
                                    (e.target as HTMLInputElement).setCustomValidity("")
                                }
                                required 
                            />
                        </div>
                        <div className="field">
                            <label>Organisation Name</label>
                            <input name="organisation" placeholder="e.g. Safaricom, UNICEF Kenya" required />
                        </div>
                        <div className="field">
                            <label>Country</label>
                            <input name="country" placeholder="e.g. Kenya, Nigeria" required />
                        </div>
                        <div className="field full">
                            <label>Why would you like to partner with the AU-IBAR Walk?</label>
                            <textarea
                                name="partnershipInquiry"
                                placeholder="Tell us about your organisation/vendor/exhibition and how you'd like to support the AU-IBAR Walk"
                                required
                            />
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
                    <button className="submit" id="formSubmit" disabled={loading}>
                        {loading ? "SUBMITTING..." : "SUBMIT INTEREST"}
                    </button>
                </form>
                <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
            </div>
        </>
    )
}