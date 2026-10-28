export default function RefundPolicy() {
    return (
        <div className="terms-content">
            <div className="terms-hero">
                <h2 className="terms-title">Cancellation and Refund Policy</h2>
                <div className="terms-meta-pills">
                    <span className="meta-pill"><strong>Event:</strong> AU-IBAR Walk</span>
                    <span className="meta-pill"><strong>Host:</strong> AU-IBAR Secretariat</span>
                    <span className="meta-pill"><strong>Contact:</strong> ibar.office@au-ibar.org</span>
                </div>
            </div>

            <p className="terms-intro">
                Thank you for registering for the AU-IBAR Walk. As an event hosted by a specialized technical
                office of the African Union Commission, we are committed to accountability, transparency, and
                operational efficiency. By completing your registration, you agree to the terms detailed below.
            </p>

            <div className="terms-grid">
                <div className="term-card">
                    <span className="term-num">01</span>
                    <div>
                        <h3>Participant-Initiated Cancellations</h3>
                        <p>
                            Submit a formal cancellation request via email to <strong>ibar.office@au-ibar.org</strong>.<br />
                            • <strong>7 Days or More Before:</strong> Eligible for a full (100%) refund.<br />
                            • <strong>3 to 6 Days Before:</strong> Eligible for a 50% refund, or free ticket transfer to a colleague.<br />
                            • <strong>Less Than 72 Hours Before:</strong> Strictly non-refundable due to pre-committed administrative and logistical costs.
                        </p>
                    </div>
                </div>

                <div className="term-card">
                    <span className="term-num">02</span>
                    <div>
                        <h3>Event Postponement or Cancellation by AU-IBAR</h3>
                        <p>
                            AU-IBAR reserves the right to cancel or reschedule due to force majeure, security directives,
                            health protocols, or weather.
                            <br />
                            • <strong>Rescheduled:</strong> Registration remains valid for the new date, or request a 100% refund if unavailable.<br />
                            • <strong>Cancelled:</strong> Automatic 100% refund. AU-IBAR is not responsible for travel or incidental expenses.
                        </p>
                    </div>
                </div>

                <div className="term-card">
                    <span className="term-num">03</span>
                    <div>
                        <h3>Registration Transfers & Substitutions</h3>
                        <p>
                            Send a substitute participant from your organisation up to 48 hours prior to the event
                            by emailing your booking reference and replacement details to the administrative desk at
                            no additional charge.
                        </p>
                    </div>
                </div>

                <div className="term-card">
                    <span className="term-num">04</span>
                    <div>
                        <h3>Refund Processing & Timelines</h3>
                        <p>
                            Approved refunds are reversed to the original payment channel
                            (Credit/Debit card, Mobile Money, or Bank Transfer). Please allow 14 to 21 business days
                            for funds to reflect due to institutional financial protocols.
                        </p>
                    </div>
                </div>
            </div>

            <div className="terms-footer-note">
                <p>
                    <strong>Contact Us<br /></strong> 
                    <span>AU-IBAR Headquarters, Kenindia Business Park, Museum Hill, Westlands Road, Nairobi, Kenya.</span>
                    <br />
                    <span>Email: ibar.office@au-ibar.org</span>
                </p>
            </div>
        </div>
    );
}