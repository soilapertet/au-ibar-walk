// Import icons
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaBuildingColumns } from "react-icons/fa6";

export default function GetInvolved({ onOpen }) {
    return (
        <section class="section partner" id="involve">
            <div class="section-inner">
                <div class="kicker">Get involved</div>
                <h2>There is a place for you in the Walk.</h2>
                <p class="lead">Whether you want to participate, support the movement, showcase your work or bring your
                    products to the event, join us in making the Walk a shared experience.</p>
                <div class="opps">
                    <div class="opp">
                        <div class="icon"><FaHandshakeSimple /></div>
                        <h3>Become a Partner</h3>
                        <p>Support the Walk through sponsorship, technical expertise, services or in-kind contributions.</p>
                        <a onclick={(e) => {
                            e.preventDefault();
                            onOpen('partner');
                        }}>BECOME A PARTNER →</a>
                    </div>
                    <div class="opp">
                        <div class="icon"><HiBuildingStorefront /></div>
                        <h3>Become a Vendor</h3>
                        <p>Showcase products and services to participants and visitors in a vibrant event environment.</p>
                        <a onclick={(e) => {
                            e.preventDefault();
                            onOpen('vendor')
                        }}>APPLY AS A VENDOR →</a>
                    </div>
                    <div class="opp">
                        <div class="icon"><FaBuildingColumns /></div>
                        <h3>Become an Exhibitor</h3>
                        <p>Put your organisation, innovation or community initiative in the spotlight.</p>
                        <a onclick={(e) => {
                            e.preventDefault();
                            onOpen('exhibitor');
                        }}>BECOME AN EXHIBITOR →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}