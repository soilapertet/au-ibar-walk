import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-inner">
                <div>
                    <div className="eyebrow">A Continental Movement</div>
                    <h1>Walk for <span>Livelihoods.</span><br/>Walk for Life.</h1>
                    <p className="tag">
                        The AU-IBAR Awareness Walk brings people, livestock, livelihoods and communities together
                        — one step at a time.
                    </p>
            
                    <div className="event-strip">
                        <div><b>DATE</b><small>28 November 2026</small></div>
                        <div><b>VENUE</b><small>AU-IBAR Campus, Westlands</small></div>
                        <div><b>DISTANCE</b><small>5 KM · Family Friendly</small></div>
                    </div>
                </div>
                <div className="hero-logo">
                    <Image
                        src="/hero-walk-logo.png"
                        alt="AU-IBAR Walking for Livelihoods, Livestock and Communities"
                        width={1254}
                        height={1117}
                    />
                </div>
                {/* Register Button */}
                {/* Partner Button */}
            </div>
        </section>
    )
}