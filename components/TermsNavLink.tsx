"use client";

import { useState } from "react";
import TermsModal from "./TermsModal";

export default function TermsNavLink() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="nav-text-link"
                onClick={() => setOpen(true)}
            >
                Terms & Conditions
            </button>
            <TermsModal open={open} onClose={() => setOpen(false)} />
        </>
    )
}