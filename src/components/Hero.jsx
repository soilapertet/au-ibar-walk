import heroGraphic from '../assets/au-ibar-hero-graphic.png';

export default function Hero({ onRegister }) {
    return (
        <section className="hero" id="home">
            <div className="hero-inner">
                <div>
                    <div className="eyebrow">A Continental Movement</div>
                    <h1>Walk for <span>Livelihoods.</span><br />Walk for Life.</h1>
                    <p className="tag">The AU-IBAR Awareness Walk brings people, livestock, livelihoods and communities together
                        — one step at a time.</p>
                    <div className="hero-actions">
                        <a className="btn" href="#" onClick={onRegister}>JOIN THE WALK →</a>
                        <a className="btn gold" href="#involve">PARTNER WITH US</a>
                    </div>
                    <div className="event-strip">
                        <div><b>DATE</b><small>Coming Soon</small></div>
                        <div><b>VENUE</b><small>To be announced</small></div>
                        <div><b>DISTANCE</b><small>5 KM · Family Friendly</small></div>
                    </div>
                </div>
                <div className="hero-logo">
                    <img
                        src={heroGraphic}
                        alt="AU-IBAR Walking for Livelihoods, Livestock and Communities"
                    />
                </div>
            </div>
        </section>
    )
}