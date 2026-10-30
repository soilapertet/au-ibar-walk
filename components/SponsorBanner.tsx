import Image from "next/image";

export default function SponsorBanner() {
    return (
        <section className="fees" id="sponsor-banner"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "50px"
            }}>
            <h2 className="kicker">In Partnership With</h2>
            <div className="sponsor-container">
                <a
                    href="https://ecobank.com/ke/personal-banking"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "block",
                        width: "18%",
                        marginTop: "10px",
                        cursor: "pointer"
                    }}
                >
                    <Image
                        src="/ecobank-logo.png"
                        alt="Ecobank logo"
                        width={3000}
                        height={1475}
                        style={{ width: "100%", height: "auto", display: "block" }}
                        priority />
                </a>
                <a
                    href="https://www.bcdtravel.com/country/kenya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "block",
                        width: "26%",
                        marginTop: "10px",
                        cursor: "pointer"
                    }}
                >
                    <Image
                        src="/BCDTravel_Logo.webp"
                        alt="BCD Travel logo"
                        width={1359}
                        height={295}
                        style={{ width: "100%", height: "auto", display: "block" }}
                        priority />
                </a>
            </div>

        </section>
    )
}