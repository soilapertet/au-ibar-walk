"use client";

import { useState } from "react";
import TermsModal from "./TermsModal";

export default function TermsNavLink() {

    const [showTerms, setShowTerms] = useState(false);

    return (
        <>
            <a
                onClick={(e) => {
                    e.preventDefault()
                    setShowTerms(true)
                }}
            >
                Terms & Conditions
            </a>
            <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
        </>
    )
}