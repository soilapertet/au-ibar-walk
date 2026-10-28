"use client";

import { useState } from "react";
import RefundPolicyModal from "./ReturnPolicyModal";

export default function RefundNavLink() {

    const [showPolicy, setShowPolicy] = useState(false);

    return (
        <>
            <a
                onClick={(e) => {
                    e.preventDefault();
                    setShowPolicy(true);
                }}
            >
                Return Policy
            </a>
            <RefundPolicyModal open={showPolicy} onClose={() => setShowPolicy(false)} />
        </>
    );
}