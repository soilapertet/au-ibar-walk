"use client";
import { useState, useRef } from "react";
import { AlertCircle } from "lucide-react";
import TermsModal from "./TermsModal";
import { countriesData } from "@/data/countriesData";

const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

interface RegistrationFormProps {
    onSuccess: () => void;
    onError?: (hasError: boolean) => void;
}

export default function RegistrationForm({ onSuccess, onError }: RegistrationFormProps) {

    const [showTerms, setShowTerms] = useState(false);
    const [groupSize, setGroupSize] = useState(0);
    const [participationType, setParticipationType] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Initialize a dictionary to store the tshirt size and its corresponding quantity
    const [sizeQuantities, setSizeQuantities] = useState<Record<string, number>>(
        Object.fromEntries(TSHIRT_SIZES.map((size) => [size, 0]))
    );

    const totalEntered = Object.values(sizeQuantities).reduce((sum, n) => sum + n, 0);

    // Create a ref for the top of the registration form
    const topRef = useRef<HTMLDivElement>(null);

    function handleSetError(msg: string | null) {
        setError(msg);
        if (onError) {
            onError(!!msg);
        }

        if (msg) {
            setTimeout(() => {
                topRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 50)
        }
    }

    function handleQuantityChange(size: string, value: string) {
        setSizeQuantities((prev) => ({
            ...prev,
            [size]: Math.max(0, Number(value) || 0),
        }));
    }

    // Review what's going in this function
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        handleSetError(null);

        if (participationType === "Corporate Group" && totalEntered !== groupSize) {
            alert(`Size quantities (${totalEntered}) must add up to your group size (${groupSize}).`);
            return;
        }

        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Debugging purposes
        console.log("Form Data Entries: ", data);

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to submit registration. Please try again.");
            }

            onSuccess();
        } catch (err: any) {
            handleSetError(err.message || "An unexpected error occured.");
        } finally {
            setLoading(false);
        }
    }

    // --- Form View ---
    return (
        <>
            <div ref={topRef} style={{ marginTop: "50px" }}>
                <div className="kicker" id="modalKicker">Join the AU-IBAR Walk</div>
                <h2 id="modalTitle" style={{ marginLeft: "0px" }}>Register for the AU-IBAR Walk</h2>
                <p
                    className="lead"
                    id="modalLead"
                    style={{ fontSize: "15px", marginBottom: "5px" }}
                >
                    Complete the registration details below.
                </p>
                <form id="registrationForm" onSubmit={handleSubmit}>
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
                                placeholder="e.g. 0712345678"
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
                                placeholder="e.g. janedoe@email.com"
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                onInvalid={(e) =>
                                    (e.target as HTMLInputElement).setCustomValidity(
                                        "Please enter a valid email address (e.g., jane@example.com)"
                                    )
                                }
                                onInput={(e) =>
                                    (e.target as HTMLInputElement).setCustomValidity("")
                                }
                                required />
                        </div>
                        <div className="field">
                            <label>Nationality</label>
                            <select name="nationality" required defaultValue="">
                                <option value="" disabled>Select your nationality</option>
                                {countriesData.map((country) => (
                                    <option key={country}>{country}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label>Age</label>
                            <input name="age" type="number" min="1" max="70" required />
                        </div>
                        <div className="field">
                            <label>Gender</label>
                            <select name="gender" required defaultValue="">
                                <option value="" disabled>Select gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="X">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="field full">
                            <label>How would you like to take part?</label>
                            <select
                                name="registrationType"
                                required
                                value={participationType}
                                onChange={(e) => setParticipationType(e.target.value)}>
                                <option value="" disabled>Select an option</option>
                                <option value="Individual Participant">Individual Participant</option>
                                <option value="Corporate Group">Corporate Group</option>
                                <option value="Child">Child</option>
                            </select>
                        </div>
                        {participationType === "Corporate Group" ? (
                            <div className="field full">
                                <div className="field">
                                    <label>How many group members will be attending?</label>
                                    <input
                                        name="groupSize"
                                        type="number"
                                        min="1"
                                        required
                                        defaultValue={1}
                                        onChange={(e) => setGroupSize(Math.max(0, Number(e.target.value) || 0))}
                                    />
                                </div>
                                <div className="field">
                                    <label>How many of each t-shirt size do you need?</label>
                                    <div className="size-quantity-grid">
                                        {TSHIRT_SIZES.map((size) => (
                                            <div key={size} className="size-quantity-row">
                                                <label>{size}</label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    name={`sizeQty-${size}`}
                                                    defaultValue={0}
                                                    onChange={(e) => handleQuantityChange(size, e.target.value)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <p className={totalEntered === groupSize ? "size-total ok" : "size-total warn"}>
                                        {totalEntered} / {groupSize} sizes entered
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="field">
                                <label>T-shirt Size</label>
                                <select name="tshirtSize" required defaultValue="">
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
                    <button className="submit" id="formSubmit" disabled={loading}>
                        {loading ? "SUBMITTING..." : "SUBMIT REGISTRATION"}
                    </button>
                </form>
                <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
            </div>
        </>
    )
}