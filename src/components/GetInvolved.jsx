// Import icons
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaBuildingColumns } from "react-icons/fa6";

export default function GetInvolved({ onOpen }) {
    return (
        <section className="section partner" id="involve">
            <div className="section-inner">
                <div className="kicker">Get involved</div>
                <h2>There is a place for you in the Walk.</h2>
                <p className="lead">Whether you want to participate, support the movement, showcase your work or bring your
                    products to the event, join us in making the Walk a shared experience.</p>
                <div className="opps">
                    <div className="opp">
                        <div className="icon"><FaHandshakeSimple size={30}/></div>
                        <h3>Become a Partner</h3>
                        <p>Support the Walk through sponsorship, technical expertise, services or in-kind contributions.</p>
                        <a onClick={(e) => {
                            e.preventDefault();
                            onOpen('partner');
                        }} style={{ cursor: 'pointer'}}>BECOME A PARTNER →</a>
                    </div>
                    <div className="opp">
                        <div className="icon"><HiBuildingStorefront  size={30}/></div>
                        <h3>Become a Vendor</h3>
                        <p>Showcase products and services to participants and visitors in a vibrant event environment.</p>
                        <a onClick={(e) => {
                            e.preventDefault();
                            onOpen('vendor')
                        }} style={{ cursor: 'pointer'}}>APPLY AS A VENDOR →</a>
                    </div>
                    <div className="opp">
                        <div className="icon"><FaBuildingColumns  size={30}/></div>
                        <h3>Become an Exhibitor</h3>
                        <p>Put your organisation, innovation or community initiative in the spotlight.</p>
                        <a onClick={(e) => {
                            e.preventDefault();
                            onOpen('exhibitor');
                        }} style={{ cursor: 'pointer'}}>BECOME AN EXHIBITOR →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}