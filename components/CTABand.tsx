import Countdown from "./Countdown";

export default function CTABand() {
    return (
        <section className="section band" id="gallery">
            <div className="section-inner">
                <div>
                    <div className="kicker" style={{ color:" #ffd26b"}}>Save the date</div>
                    <h2>One step can start a movement.</h2>
                    <p style={{ color: "#eadfce", maxWidth: "680px", lineHeight:"1.7"}}><strong>28 November 2026</strong> · AU-IBAR
                        Campus, Westlands · 5 KM Family-Friendly Walk</p>
                </div>
            </div>
            <Countdown/>
        </section>
    )
}