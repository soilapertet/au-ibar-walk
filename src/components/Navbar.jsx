import logo from '../assets/au-ibar-logo.png';

export default function Navbar({ onRegister }) {
    return (
        <nav>
            <a className="brand" href="#home"><img src={logo} alt="AU-IBAR" /></a>
            <div className="links">
                <a href="#about">About</a>
                <a href="#why">Why We Walk</a>
                <a href="#involve">Get Involved</a>
                <a href="#walk-stats">The Walk</a>
                <a href="#contact">Contact</a>
                <button className="btn" href="#" onClick={onRegister}>Register Now</button>
            </div>
        </nav>
    )
}