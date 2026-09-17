export default function EventBand({ onRegister }) {
    return (
        <section className="section band" id="event">
            <div className="section-inner">
                <div>
                    <div className="kicker" style={{ color : "#ffd26b"}}>Save the date</div>
                    <h2>One step can start a movement.</h2>
                    <p style={{ 
                        color :"#eadfce",
                        maxWidth :"680px",
                        lineHeight :"1.7"
                    }}>
                        Event details, route information and registration dates will be announced soon.
                    </p>
                </div>
                <a className="btn gold" href="#" onClick={onRegister}>REGISTER →</a>
            </div>
        </section>
    )
}