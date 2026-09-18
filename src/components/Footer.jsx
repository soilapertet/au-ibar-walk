import logo from '../assets/au-ibar-logo.png';

export default function Footer() {
    return (
        <footer class="footer" id="contact">
            <div class="foot">
                <div>
                    <img src={logo} alt="AU-IBAR logo"/>
                    <p>
                        <strong>AU-IBAR Awareness Walk</strong><br/>Walking for Livelihoods, Livestock and Communities.
                    </p>
                </div>
                <div>
                    <p>
                        <strong>Get in touch</strong><br/>Events & Partnerships<br/>AU-IBAR · African Union
                    </p>
                 </div>
            </div>
            <div class="copy">
                © 2026 AU-IBAR Awareness Walk
            </div>
        </footer>
    )
}