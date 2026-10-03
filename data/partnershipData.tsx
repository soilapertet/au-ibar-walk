interface DataObj {
    kicker: string;
    title: string;
    lead: string;
}

export const partnershipData : Record<"partner" | "vendor" | "exhibitor", DataObj>= {
    partner: {
        kicker: 'Partnerships',
        title: 'Become a Partner',
        lead: 'Tell us how your organisation can support the AU-IBAR Walk — through sponsorship, expertise, services or in-kind contributions.'
    },
    vendor: {
        kicker: 'Marketplace',
        title: 'Become a Vendor',
        lead: "Tell us about your products or services, and how you'd like to take part on the day."
    },
    exhibitor: {
        kicker: 'Exhibition',
        title: 'Become an Exhibitor',
        lead: "Tell us what you'd like to showcase to participants and visitors."
    }
}