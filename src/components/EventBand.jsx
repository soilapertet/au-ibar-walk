export default function EventBand({ onRegister }) {
    return (
        <section class="section band" id="event">
            <div class="section-inner">
                <div>
                    <div class="kicker" style="color:#ffd26b">Save the date</div>
                    <h2>One step can start a movement.</h2>
                    <p style="color:#eadfce;max-width:680px;line-height:1.7">
                        Event details, route information and registration dates will be announced soon.
                    </p>
                </div>
                <a class="btn gold" href="#" onclick={onRegister}>REGISTER →</a>
            </div>
        </section>
    )
}