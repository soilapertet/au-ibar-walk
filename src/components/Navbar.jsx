import logo from '../assets/au-ibar-logo.png';

export default function Navbar({ openRegister }) {
    return (
        <nav>
            <a class="brand" href="#home"><img src={logo} alt="AU-IBAR"/></a>
        <div class="links">
            <a href="#about">About</a>
            <a href="#why">Why We Walk</a>
            <a href="#involve">Get Involved</a>
            <a href="#walk-stata">The Walk</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            <a class="btn" href="#" onclick={openRegister}>Register Now</a></div>
        <div class="hamb">☰</div>
    </nav>
    )
}