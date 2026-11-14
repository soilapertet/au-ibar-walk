"use client";

import { ReactNode } from "react";
import { useModal, ModalType } from './ModalContext';

interface RegisterButtonProps {
    link: string;
    className?: string;
    children: ReactNode;
}

export default function RegisterButton({ link, className, children }: RegisterButtonProps) {

    // Access the openModal helper function within the receiver
    // const { openModal } = useModal();

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    )
}