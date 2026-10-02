import { Handshake, LucideIcon, ShoppingBag, Store } from "lucide-react";
import { ModalType } from "@/components/ModalContext";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

// Define the blueprint/structure of each data item
interface Data {
    id : number;
    icon : LucideIcon;
    modalType: ModalType;
    title: string;
    description: string;
    buttonLabel: string;
}

export const getInvolvedData : Data [] = [
    {
        id: 1,
        icon: Handshake,
        modalType: "partner",
        title: "Become a Partner",
        description: "Support the Walk through sponsorship, technical expertise, services or in-kind contributions.",
        buttonLabel: "BECOME A PARTNER →"
    },
    {
        id: 2,
        icon: ShoppingBag,
        modalType: "vendor",
        title: "Become a Vendor",
        description: "Showcase products and services to participants and visitors in a vibrant event environment.",
        buttonLabel: "APPLY AS A VENDOR →"
    },
    {
        id: 3,
        icon: Store,
        modalType: "exhibitor",
        title: "Become an Exhibitor",
        description: "Put your organisation, innovation or community initiative in the spotlight.",
        buttonLabel: "BECOME AN EXHIBITOR →"
    }
]