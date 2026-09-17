import logo from '../assets/au-ibar-logo.png';

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="foot">
                <div>
                    <img
                        src={logo}
                        alt="AU-IBAR logo"/>
                    <p>
                        <strong>AU-IBAR Awareness Walk</strong><br/>Walking for Livelihoods, Livestock and Communities.
                    </p>
                </div>
                <div>
                    <p>
                        <strong>Get in touch</strong><br/>Events & PartnershipsAU-IBAR · African Union
                    </p>
                </div>
                <div className="copy">
                    © 2026 AU-IBAR Awareness Walk · Demonstration website concept · All event details shown as
                    placeholders until confirmed.
                </div>
            </div>
        </footer>
    )
}