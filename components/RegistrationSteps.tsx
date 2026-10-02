export default function RegistrationSteps() {
    return (
        <section className="section" id="registration" style={{ backgroundColor : "#f4f7f3"}}>
            <div className="kicker">How it works</div>
            <h2>Registration made simple.</h2>
            <p className="lead">
                Choose your participant category, complete the registration details and follow the official
                payment or confirmation instructions when they are released.
            </p>
            <div className="reg-steps">
                <div className="reg-step">
                    <div className="num">1</div>
                    <h3>Choose your category</h3>
                    <p>
                        Individual, Corporate Group or Child. The applicable fee is shown clearly before you continue.
                    </p>
                </div>
                <div className="reg-step">
                    <div className="num">2</div>
                    <h3>Complete your details</h3>
                    <p>
                        Provide your name, contact details, organisation and any accessibility or special assistance needs.
                    </p>
                </div>
                <div className="reg-step">
                    <div className="num">3</div>
                    <h3>Confirm your place</h3>
                    <p>
                        Receive your confirmation and participant reference once the final registration process is
                        connected.
                    </p>
                </div>
            </div>
            <div className="fee-cta">
                <a className="btn" href="#fees">
                    VIEW REGISTRATION FEES →
                </a>
            </div>
        </section>
    )
}