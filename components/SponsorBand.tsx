import Image from "next/image";

export default function SponsorBand() {
    return (
        <div className="program-logos">
            <div className="program-logos-inner">
                <div className="program-logo">
                    <Image
                        src="/logo-apmd.png"
                        alt="African Pastoral Markets Development Platform (APMD)"
                        width={2000}
                        height={1964}
                        priority
                    />
                </div>
                <div className="program-logo">
                    <Image
                        src="/logo-aquatic-biodiversity.png"
                        alt="Conserving Aquatic Biodiversity"
                        width={524}
                        height={511}
                        priority

                    />
                </div>
                <div className="program-logo">
                    <Image
                        src="/logo-ces-amr.png"
                        alt="Containing the Emergence and Spread of Antimicrobial Resistance (CES-AMR)"
                        width={576}
                        height={593}
                        priority
                    />
                </div>
                <div className="program-logo">
                    <Image
                        src="/logo-raffs.png"
                        alt="Resilient African Feed and Fodder Systems (RAFFS) Project"
                        width={1796}
                        height={1795}
                        priority
                    />
                </div>
                <div className="program-logo">
                    <Image
                        src="/logo-fishgov2.png"
                        alt="FishGov 2 Project"
                        width={342}
                        height={332}
                        priority
                    />
                </div>
                <div className="program-logo">
                    <Image
                        src="/logo-au-ohdaa.png"
                        alt="AU-OHDAA"
                        width={456}
                        height={373}
                        priority
                    />
                </div>
                <div className="program-logo">
                    <Image
                        src="/logo-ppr-free.png"
                        alt="Uniting Africa for a PPR-Free Future"
                        width={2000}
                        height={525}
                    />
                </div>
            </div>
        </div>
    )
}