import heroGraphic from '../assets/au-ibar-hero-graphic.png';

export default function Hero() {
    return (
        <section class="hero" id="home">
            <div class="hero-inner">
                <div>
                    <div class="eyebrow">A Continental Movement</div>
                    <h1>Walk for <span>Livelihoods.</span><br />Walk for Life.</h1>
                    <p class="tag">The AU-IBAR Awareness Walk brings people, livestock, livelihoods and communities together
                        — one step at a time.</p>
                    <div class="hero-actions"><a class="btn" href="#" onclick="openModal('participant');return false">JOIN
                        THE WALK →</a><a class="btn gold" href="#involve">PARTNER WITH US</a></div>
                    <div class="event-strip">
                        <div><b>DATE</b><small>Coming Soon</small></div>
                        <div><b>VENUE</b><small>To be announced</small></div>
                        <div><b>DISTANCE</b><small>5 KM · Family Friendly</small></div>
                    </div>
                </div>
                <div class="hero-logo">
                    <img
                        src={heroGraphic}
                        alt="AU-IBAR Walking for Livelihoods, Livestock and Communities"
                    />
                </div>
            </div>
        </section>
    )
}