import { Eye, Handshake, Landmark, LucideIcon, Sprout } from "lucide-react";
import { ReactNode } from "react";

interface Data {
    id: number;
    icon: LucideIcon;
    title: string;
    detail: string | ReactNode;
}

export const aboutData : Data[] = [
    {
        id: 1,
        icon: Eye,
        title: "Make the Work Visible",
        detail: "AU-IBAR's work is largely recongized in the Animal Resources sector. the AU-IBAR Walk creates a public platform to bring that work into view."
    },
    {
        id: 2,
        icon: Handshake,
        title: "Bring Africa Together",
        detail: "the AU-IBAR Walk engages citizens, governments, AU bodies, diplomats, partners, the private sector, civil society, women, youth and media."
    },
    {
        id: 3,
        icon: Landmark,
        title: "Build Strong Institutions",
        detail: "It conveys a clear message: animal resources matter for development, and realising their potential needs strong institutions and permanent infrastructure."
    },
    {
        id: 4,
        icon: Sprout,
        title: "Turn Awareness into Impact",
        detail: (
            <>
                Fundraising supports the Campus and community livelihood initiatives. The Campus is the <strong>platform</strong>;
                communities and livelihoods are the <strong>purpose</strong>.
            </>
        )
    }
]