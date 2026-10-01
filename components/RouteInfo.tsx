import Image from "next/image";

export default function RouteInfo() {
    return (
        <section className="section" id="route">
            <div className="section-inner">
                <div className="kicker">The Walk</div>
                <h2>Know the journey before you arrive.</h2>
                <p className="lead">
                    The final route and operational details will be confirmed by the organising team. The
                    prototype shows how participants will find everything they need in one place.
                </p>
                <div className="route-box">
                    <div className="route-map actual-route-map">
                        <a
                            href="https://footpathapp.com/routes/0bc3c12c-ba68-42df-b4a5-96bb688c75f3" target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open the interactive AU-IBAR Awareness Walk route in Footpath">
                            <Image
                                src="/route-map.jpg"
                                alt="AU-IBAR Awareness Walk route map"
                                width={710}
                                height={695}
                                priority
                            />
                        </a>
                    </div>
                    <div className="route-info">
                        <h3>Route & participant information</h3>
                        <div className="route-list">
                            <div className="route-row">
                                <div>📍</div>
                                <div><b>Start & Finish</b><span>AU-IBAR Campus, Westlands</span></div>
                            </div>
                            <div className="route-row">
                                <div>🚶🏾</div>
                                <div><b>Distance</b><span>5 KM · Family-friendly concept.</span></div>
                            </div>
                            <div className="route-row">
                                <div>💧</div>
                                <div><b>Support points</b><span>Water, first aid and marshal points will be published with
                                    the final route.</span></div>
                            </div>
                            <div className="route-row">
                                <div>♿</div>
                                <div><b>Accessibility</b><span>Participants can indicate accessibility or special assistance
                                    requirements during registration.</span></div>
                            </div>
                        </div>
                        <div
                            className="fee-cta"
                            style={{
                                textAlign: "left",
                                display: "flex",
                                gap: "10px",
                                flexWrap: "wrap"
                            }}>
                            <a
                                className="btn gold" href="https://footpathapp.com/routes/0bc3c12c-ba68-42df-b4a5-96bb688c75f3"
                                target="_blank" rel="noopener noreferrer">
                                OPEN INTERACTIVE ROUTE →
                            </a>
                        </div>
                    </div>
                </div>
                <div className="schedule">
                    <div className="step"><strong>Registration</strong><small>Check-in & participant support</small></div>
                    <div className="step"><strong>Warm-up</strong><small>Get ready for the Walk</small></div>
                    <div className="step"><strong>Walk</strong><small>5 KM community journey</small></div>
                    <div className="step"><strong>Activities</strong><small>Community & partner engagement</small></div>
                    <div className="step"><strong>Celebration</strong><small>Recognition & closing</small></div>
                </div>
                <div className="stats">
                    <div className="stat"><strong>1,000+</strong><span>Target Participants</span></div>
                    <div className="stat"><strong>5 KM</strong><span>Walk Concept</span></div>
                    <div className="stat"><strong>Family</strong><span>Friendly</span></div>
                    <div className="stat"><strong>1</strong><span>Shared Vision</span></div>
                </div>
            </div>
        </section>
    )
}