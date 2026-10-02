import { feesData } from "@/data/feesData";
import RegisterButton from "./RegisterButton";

export default function Fees() {
    return (
        <section className="section fees" id="fees">
            <div className="section-inner">
                <div className="kicker">Join the movement</div>
                <h2>Registration Fees</h2>
                <p className="lead">
                    Choose the participation option that works for you. Corporate groups receive a special rate,
                    and children walk free.
                </p>
                <div className="fee-grid">
                    {feesData.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div className="fee-card">
                                {item.badgeLabel && <span className="badge">{item.badgeLabel}</span>}
                                <div className="fee-icon"><Icon/></div>
                                <h3>{item.category}</h3>
                                <div className="price">{item.price}</div>
                                {item.category === "Corporate Group" && <div className="per">per person</div>}
                                <p>{item.description}</p>
                               <RegisterButton type={item.modalType} className={`btn ${item.category === "Corporate Group" ? 'gold' : '' }`}>{item.buttonLabel}</RegisterButton>
                            </div>  
                        )
                    })}
                </div>
            </div>
        </section>
    )
}