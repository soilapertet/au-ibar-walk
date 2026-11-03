interface Data {
    kicker: string;
    title: string;
    lead: string;
}

export const partnershipData : Record<"partner" | "vendor" | "sponsor", Data>= {
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
    sponsor: {
        kicker: 'Sponsorship',
        title: 'Become a Sponsor',
        lead: "Sponsor the event and connect with participants and visitors. Tell us how you'd like to get involved."
    }
}