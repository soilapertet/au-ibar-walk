import Image from "next/image";

export default function SponsorBanner() {
    return (
        <section className="section fees" id="sponsor-banner"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <h2 className="kicker">In Partnership With</h2>
            <a
                href="https://ecobank.com/ke/personal-banking"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                    display: "block",
                    width: "35%", 
                    marginTop: "40px", 
                    cursor: "pointer"}}
                >
                <Image
                    src="/ecobank-logo.png"
                    alt="Ecobank logo"
                    width={3000}
                    height={1475}
                    style={{ width:"100%", height: "auto", display: "block" }}
                    priority />
            </a>
        </section>
    )
}