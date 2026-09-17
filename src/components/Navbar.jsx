import logo from '../assets/au-ibar-logo.png';

export default function Navbar({ openRegister }) {
    return (
        <nav>
            <a className="brand" href="#home"><img src={logo} alt="AU-IBAR"/></a>
        <div className="links">
            <a href="#about">About</a>
            <a href="#why">Why We Walk</a>
            <a href="#involve">Get Involved</a>
            <a href="#walk-stata">The Walk</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <a className="btn" href="#" onClick={openRegister}>Register Now</a></div>
        <div className="hamb">☰</div>
    </nav>
    )
}