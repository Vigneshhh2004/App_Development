import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [formError, setFormError] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [responseType, setResponseType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error messages
        setNameError('');
        setEmailError('');
        setMessageError('');
        setFormError('');

        let hasError = false;

        // Validate name
        if (!name) {
            setNameError('Name is required.');
            hasError = true;
        }

        // Validate email
        if (!email.includes('@') || !email.includes('.')) {
            setEmailError('Invalid email address.');
            hasError = true;
        }

        // Validate message
        if (!message) {
            setMessageError('Message is required.');
            hasError = true;
        }

        if (hasError) return;

        // Simulate successful submission
        setResponseType('success');
        setResponseMessage('Your message has been sent successfully!');
        
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
                If you have any questions or need assistance, please don't hesitate to reach out. 
                We're here to help you with any inquiries or issues you may have.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {nameError && <div className="error-message">{nameError}</div>}

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="error-message">{emailError}</div>}

                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {messageError && <div className="error-message">{messageError}</div>}

                <button type="submit">Send</button>

                {formError && <div className="error-message">{formError}</div>}
                {responseMessage && (
                    <div className={`message ${responseType}`}>
                        {responseMessage}
                    </div>
                )}
            </form>
        </div>
    );
}

export default Contact;
