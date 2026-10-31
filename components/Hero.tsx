import Image from "next/image";
import RegisterButton from "./RegisterButton";

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-inner">
                <div>
                    <div className="eyebrow">A Continental Movement</div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "5px 0"
                    }}>
                        <h2 style={{  color: "#fffaf0", fontSize: "40px", marginTop: "0px" }}>Walk for <span style={{ color: "#f9d47b" }}>Animal Resources.</span></h2>
                        <h2 style={{  color: "#fffaf0", fontSize: "40px", marginTop: "0px" }}>Walk for <span style={{ color: "#f9d47b" }}>Livelihoods</span></h2>
                        <h2 style={{  color: "#fffaf0", fontSize: "40px", marginTop: "0px" }}>Walk for <span style={{ color: "#f9d47b"}}>Life.</span></h2>
                    </div>
                    <p className="tag">
                        The AU-IBAR Awareness Walk brings people, livestock, livelihoods and communities together
                        — one step at a time.
                    </p>
                    <div className="hero-actions">
                        <RegisterButton type="participant" className="btn">JOIN THE WALK</RegisterButton>
                        <a className="btn gold" href="#involve">PARTNER WITH US</a></div>
                    <div className="event-strip">
                        <div><b>DATE</b><small>28 November 2026</small></div>
                        <div><b>VENUE</b><small>AU-IBAR Campus, Westlands</small></div>
                        <div><b>DISTANCE</b><small>5 KM · Family Friendly</small></div>
                    </div>
                </div>
                <div className="hero-logo">
                    <Image
                        src="/hero-walk-logo.jpeg"
                        alt="AU-IBAR Walking for Livelihoods, Livestock and Communities"
                        width={1254}
                        height={1117}
                    />
                </div>
            </div>
        </section>
    )
}