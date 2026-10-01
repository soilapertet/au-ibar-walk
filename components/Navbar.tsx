import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <a
                className="brand"
                href="https://www.au-ibar.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/au-ibar-logo.png"
                    alt="AU-IBAR logo"
                    width={315}
                    height={200}
                    priority
                />
            </a>
            <div className="links">
                <Link href="/">Home</Link>

                <div className="nav-group">
                    <Link href="/#about">About</Link>
                    <div className="nav-dropdown">
                        <Link href="/#about">About</Link>
                        <Link href="/#why">Why we Walk</Link>
                        <Link href="/#involve">Get Involved</Link>
                    </div>
                </div>

                <Link href="/#route">Route Info</Link>
                <Link href="/register">Register</Link>
                <Link href="/faq">FAQ</Link>
            </div>
        </nav>
    )
}