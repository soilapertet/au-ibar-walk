import { useState } from 'react';
import { MODAL_CONTENT } from '../data/modalContent';

// Registration form
export default function RegisterModal({ type, onClose }) {

    const [submitted, setSubmitted] = useState(false);
    const content = MODAL_CONTENT[type];

    const handleSubmit = (e) => {
        e.preventDefault();             // prevent browser's built-in default behaviour for that event
        setSubmitted(true);
    }

    return (
        <div className="modal open" onClick={(e) => e.target.classList.contains('modal') && onClose()}>
            <div className="modalbox">
                <button className="close" onClick={onClose}>x</button>
                {submitted ? (
                    <>
                        <div style={{ fontSize: 52 }}>🎉</div>
                        <div className='kicker'>Thank you</div>
                        <h2>Expression of interest received.</h2>
                        <p className='lead'>
                            This is a demo interaction for the presentation prototype. In the final
                            website, submissions would be connected to the official event registration system.
                        </p>
                        <button className='submit' onClick={onClose}>DONE</button>
                    </>
                ) : (
                    <>
                        <div className='kicker'>{content.kicker}</div>
                        <h2>{content.title}</h2>
                        <p className='lead' style={{ fontSize : 15 }}>{content.lead}</p>
                        <form onSubmit={handleSubmit}>
                            <div className='formgrid'>
                                <div className='field'>
                                    <label>First Name<span style={{ color : "#D32F2F" }}>*</span></label>
                                    <input type="text" name="first-name" required />
                                </div>
                                <div className='field'>
                                    <label>Last Name<span style={{ color : "#D32F2F"}}>*</span></label>
                                    <input type="text" name="last-name" required />
                                </div>
                                <div className='field'>
                                    <label>Email Address<span style={{ color : "#D32F2F"}}>*</span></label>
                                    <input type="email" name="email" required />
                                </div>
                                <div className='field'>
                                    <label>Organisation</label>
                                    <input type="text" name="organization" />
                                </div>
                                <div className='field'>
                                    <label>Country</label>
                                    <input type="text" name="country"/>
                                </div>
                                <div className='field full'>
                                    <label>Area of Interest</label>
                                    <select>
                                        <option value="participant">Participant</option>
                                        <option value="parternship">Partnership</option>
                                        <option value="vendor">Vendor</option>
                                        <option value="exhibitor">Exhibitor</option>
                                    </select>
                                </div>
                                <div className='field full'>
                                    <label>Hobbies/Interests</label>
                                    <textarea placeholder='Tell us a little about your interest...'></textarea>
                                </div>
                            </div>
                            <button className='submit'>SUBMIT</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}