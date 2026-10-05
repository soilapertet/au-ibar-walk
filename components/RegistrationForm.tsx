interface RegistrationFormProps {
    onSuccess: () => void;
}

export default function RegistrationForm({ onSuccess } : RegistrationFormProps) {

    // Review what's going in this function
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        onSuccess();
    }

    return (
        <form id="registrationForm" onSubmit={handleSubmit}>
            <div id="formFields" className="formgrid">
                <div className="field">
                    <label>First Name</label>
                    <input name="first-name" required />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input name="last-name" required />
                </div>
                <div className="field">
                    <label>Telephone Number</label>
                    <input name="telephone" type="tel" inputMode="tel" placeholder="e.g. 0712 345 678" required />
                </div>
                <div className="field">
                    <label>Email Address</label>
                    <input name="email" type="email" required />
                </div>
                <div className="field">
                    <label>Nationality</label>
                    <input name="nationality" required />
                </div>
                <div className="field">
                    <label>Age</label>
                    <input name="age" type="number" min="1" max="120" required />
                </div>
                <div className="field">
                    <label>Gender</label>
                    <select name="gender" required>
                        <option value="" disabled>Select gender</option>
                        <option>Female</option>
                        <option>Male</option>
                        <option>Prefer not to say</option>
                    </select>
                </div>
                <div className="field">
                    <label>T-shirt Size</label>
                    <select name="tshirt" required>
                        <option value="" disabled>Select size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
                        <option>3XL</option>
                    </select>
                </div>
                <div className="field full">
                    <label>How would you like to take part?</label>
                    <select name="interest" required>
                        <option value="" disabled>Select an option</option>
                        <option>Individual Participant</option>
                        <option>Corporate Group</option>
                        <option>Child</option>
                    </select>
                </div>
            </div>
            <button className="submit" id="formSubmit">SUBMIT REGISTRATION</button>
        </form>
    )
}