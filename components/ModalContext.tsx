"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import RegistrationModal from "./RegistrationModal";

// Specify which version of the modal should show
export type ModalType = "participant" | "corporate" | "child" | "vendor" | "exhibitor" | "partner";

// Defines the blueprint/structure of the broadcast
interface ModalContextValue {
    modalType : ModalType | null;
    openModal : (type: ModalType) => void;      // function to open registration modal
    closeModal : () => void;                    // function to close registration modal
}

// Initialize the Context object to broadcast the current state 
// ModalContext: Radio station
const ModalContext = createContext<ModalContextValue | null>(null);

// ModalProvider : Radio tower
// Holds one piece of state: "which modal, if any, is currently open"
// Single source of truth
export function ModalProvider({ children } : { children : ReactNode }) {

    const [modalType, setModalType] = useState<ModalType | null>(null);
    
    const openModal = (type : ModalType) => setModalType(type);
    const closeModal = () => setModalType(null);

    return (

        // Actual broadcasting
        // Everything rendered inside ModalContext.Provider can access the 
        // the value the ModalProvider is holding
        <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
            {children}
            <RegistrationModal/>
        </ModalContext.Provider>
    );
}

// useModal: the radio receiver
// Any component anywhere insider ModalProvider can call useModal() and get back
// { modalType, openModal, closeModal }
export function useModal() : ModalContextValue {

    const context = useContext(ModalContext);

    if(!context) {
        throw new Error("useModal must be used inside a ModalProvider");
    }

    return context;
}