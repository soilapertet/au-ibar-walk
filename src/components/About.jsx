// Import icons
import { GiCow } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";

export default function About() {
    return (
        <section className="section" id="about">
            <div className="section-inner">
                <div className="kicker">About the initiative</div>
                <h2>One Walk. A shared African purpose.</h2>
                <p className="lead">
                    The Awareness Walk is a people-centred platform to raise visibility around the importance of
                    livestock, resilient livelihoods and thriving communities — while bringing partners and citizens
                    together around a common continental vision.
                </p>
                <div className="pillars" id="why">
                    <div className="card">
                        <div className="icon"><GiCow size={35}/></div>
                        <h3>Livestock</h3>
                        <p>Champion the vital contribution of livestock to food, income and resilience.</p>
                    </div>
                    <div className="card">
                        <div className="icon"><GiPlantRoots size={35}/></div>
                        <h3>Livelihoods</h3>
                        <p>Celebrate the people and enterprises that sustain families and economies.</p>
                    </div>
                    <div className="card">
                        <div className="icon"><FaPeopleGroup size={35}/></div>
                        <h3>Communities</h3>
                        <p>Connect people around healthier, stronger and more resilient communities.</p>
                    </div>
                    <div className="card">
                        <div className="icon"><FaGlobeAfrica size={35}/></div>
                        <h3>African Future</h3>
                        <p>Turn awareness into action for a sustainable and prosperous Africa.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}