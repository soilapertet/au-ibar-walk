"use client";

import { ReactNode } from "react";
import { useModal, ModalType} from './ModalContext';

interface RegisterButtonProps {
    type: ModalType;
    className?: string;
    children: ReactNode;
}

export default function RegisterButton({ type, className, children } : RegisterButtonProps) {
    
    // Access the openModal helper function within the receiver
    const { openModal } = useModal();

    return (
        <button 
            className={className} 
            onClick={() => openModal(type)}
        >
            {children}
        </button>
    )
}