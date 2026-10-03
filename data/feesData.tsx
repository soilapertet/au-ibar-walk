import { LucideIcon, UserRound, UserRoundGroup, Baby } from "lucide-react";
import { ModalType } from "@/components/ModalContext";

type CategoryType = "Individual Participant" | "Corporate Group" | "Child";

interface Data {
    id: number;
    icon: LucideIcon;
    category: CategoryType;
    modalType: ModalType;
    price: string;
    description: string;
    badgeLabel?: string;
    buttonLabel: string;
}

export const feesData : Data[] = [
    {
        id: 1,
        icon: UserRound,
        category: "Individual Participant",
        modalType: "participant",
        price: "KES 2,500",
        description: "Join as an individual and be part of the AU-IBAR Awareness Walk.",
        buttonLabel: "REGISTER NOW  →"
    },
    {
        id: 2,
        icon: UserRoundGroup,
        category: "Corporate Group",
        modalType: "corporate",
        price: "KES 2,000",
        description: "Bring your team and enjoy the special corporate group rate.",
        badgeLabel: "Team Rate",
        buttonLabel: "REGISTER YOUR TEAM  →"
    },
    {
        id: 3,
        icon: Baby,
        category: "Child",
        modalType: "child",
        price: "FREE",
        description: "Children are welcome to join the AU-IBAR Walk at no registration cost.",
        buttonLabel: "REGISTER NOW  →"
    },
]