import { getInvolvedData } from "@/data/getInvolvedData";
import RegisterButton from "./RegisterButton";

export default function GetInvolved() {
    return (
        <section className="section partner" id="involve">
            <div className="section-inner">
                <div className="kicker">Get involved</div>
                <h2>There is a place for you in the AU-IBAR Walk.</h2>
                <p className="lead">
                    Whether you want to participate, support the movement, showcase your work or bring your
                    products to the event, join us in making the AU-IBAR Walk a shared experience.
                </p>
                <div className="opps">
                    {getInvolvedData.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div 
                                key={i}
                                className="opp" 
                                role="button" 
                                tabIndex={0}
                            >
                                <Icon size={24}/>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <RegisterButton type={item.modalType} className="opp-action">{item.buttonLabel}</RegisterButton>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}