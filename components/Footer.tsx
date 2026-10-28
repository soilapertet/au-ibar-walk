import Image from "next/image";
import Link from "next/link";
import TermsNavLink from "./TermsNavLink";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="foot">
                {/* Col 1: Brand Logo & Tagline */}
                <div className="foot-brand-col">
                    <Image
                        src="/au-ibar-logo.png"
                        alt="AU-IBAR logo"
                        width={315}
                        height={200}
                    />
                    <div className="foot-brand-text">
                        <strong>AU-IBAR Awareness Walk</strong>
                        <p>Walking for Livelihoods, Livestock and Communities.</p>
                    </div>
                </div>
                {/* Col 2: Contact Info */}
                <div className="foot-col">
                    <h3 className="foot-heading">Get in touch</h3>
                    <div className="foot-contact-list">
                        <div className="foot-contact-item">
                            <MapPin size={18} className="foot-icon" />
                            <span>Kenindia Business Park, Museum Hill, Westlands Road</span>
                        </div>
                        <div className="foot-contact-item">
                            <Phone size={18} className="foot-icon" />
                            <span>+254 (20) 3674 200</span>
                        </div>
                        <div className="foot-contact-item">
                            <Mail size={18} className="foot-icon" />
                            <span>ibar.office@au-ibar.org</span>
                        </div>
                    </div>
                </div>
                {/* Col 3: Quick Links */}
                <div className="foot-col">
                    <h3 className="foot-heading">Quick Links</h3>
                    <div className="mini-links">
                        <a href="#involve">Partner</a>
                        <a href="#involve">Vendor</a>
                        <a href="#involve">Exhibitor</a>
                        <Link href="/#faq">FAQ</Link>
                        <TermsNavLink />
                    </div>
                </div>
                {/* Col 4: Disclaimer & Policies */}
                <div className="foot-col">
                    <h3 className="foot-heading">Disclaimer and Policies</h3>
                    <div className="foot-links">
                        <a href="#">Return Policy</a>
                        <a
                            href="https://www.au-ibar.org/cookie-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cookie Policy
                        </a>
                        <a
                            href="https://www.au-ibar.org/personal-data-protection-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Personal Data Protection Policy
                        </a>
                        <a
                            href="https://www.au-ibar.org/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="https://www.au-ibar.org/protection-of-your-personal-data"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Protection of Your Personal Data
                        </a>
                    </div>
                </div>
            </div>
            <div className="copy">© 2026 AU-IBAR Awareness Walk</div>
        </footer>
    )
}