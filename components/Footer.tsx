import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="foot">
                <div>
                    <Image
                        src="/au-ibar-logo.png"
                        alt="AU-IBAR logo"
                        width={315}
                        height={200}
                    />
                    <p>
                        <strong>AU-IBAR Awareness Walk</strong>
                        <br />
                        <span>Walking for Livelihoods, Livestock and Communities.</span>
                    </p>
                </div>
                <div>
                    <p>
                        <strong>Get in touch</strong>
                        <br />Events & Partnerships<br />AU-IBAR · African Union<br /><br />
                        <strong>Official event details:</strong>
                        <br />28 November 2026<br />AU-IBAR Campus, Westlands
                    </p>
                    <div className="mini-links">
                        <a href="#involve">Partner</a>
                        <a href="#involve">Vendor</a>
                        <a href="#involve">Exhibitor</a>
                        <Link href="/faq">FAQ</Link>
                    </div>
                </div>
            </div>
            <div className="copy">© 2026 AU-IBAR Awareness Walk</div>
        </footer>
    )
}