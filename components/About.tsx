"use client";

import { useState } from "react";
import { aboutData } from "@/data/aboutData";

export default function About() {

    const [activePillar, setActivePillar] = useState<number | null>(null);
    return (
        <section className="section" id="about">
            <div className="section-inner">
                <div className="kicker">About the initiative</div>
                <h2>One Walk. A shared African purpose.</h2>
                <p className="lead">
                    <strong>The AU-IBAR Awareness Walk is a public awareness, partnership and resource-mobilisation initiative,
                        not a one-day event.</strong> An Animal Resources and Livestock Innovation Exhibition and communication materials
                    will showcase AU-IBAR's work and Campus progress, even though the AU-IBAR Walk starts and ends at the current headquarters.
                    It links animal resources, continental institutions, and dependent communities to build a wider constituency for investment.
                </p>
                <div id="why">
                    <div className="sub-kicker">The Purpose Behind the AU-IBAR Walk</div>
                    <div className="pillars">
                        {aboutData.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <div 
                                    key={i}
                                    className={`card pillar-card ${activePillar === i ? 'active' : ''}`} 
                                    role="button" 
                                    tabIndex={0} 
                                    aria-expanded="false"
                                    onClick={() => setActivePillar(activePillar === i ? null : i)}
                                >
                                    <Icon size={24} />
                                    <strong><h3>{item.title}</h3><span className="expand">{`${activePillar === i ? '-' : '+'}`}</span></strong>
                                    <div className="pillar-detail">{item.detail}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}