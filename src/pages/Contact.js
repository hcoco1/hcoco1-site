/* import React from "react";

const Contact = () => {
    const formContainerStyle = {
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        background: "#fff",
    };

    const formGroupStyle = {
        marginBottom: "15px",
    };

    const labelStyle = {
        display: "block",
        marginBottom: "5px",
        color: "#555",
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "4px",
        border: "1px solid #ccc",
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "4px",
        border: "none",
        background: "#1877f2",
        color: "#fff",
        cursor: "pointer",
    };

    return (


        <div style={formContainerStyle}>
            <h2>I am a here to help </h2>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="dbef2f90-48ce-4d75-95c2-beb218063b86"></input>
                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="name">
                        Name:
                    </label>
                    <input style={inputStyle} type="text" id="name" name="name" required />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="email">
                        Email:
                    </label>
                    <input style={inputStyle} type="email" id="email" name="email" required />
                </div>
                <div style={formGroupStyle}>
                    <label style={labelStyle} htmlFor="message">
                        Message:
                    </label>
                    <textarea style={inputStyle} id="message" name="message" required></textarea>
                </div>
                <div className="h-captcha" data-captcha="true"></div>
                <button style={buttonStyle} type="submit">
                    Submit Form
                </button>
            </form>

           
            <script src="https://web3forms.com/client/script.js" async defer></script>
        </div>
    );
};

export default Contact; */

import React, { useState } from "react";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const formContainerStyle = {
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        background: "#fff",
        textAlign: "center", // Center the form content
    };

    const formGroupStyle = {
        marginBottom: "15px",
    };

    const inputStyle = {
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "4px",
        border: "1px solid #ccc",
        marginBottom: "8px",
    };

    const textareaStyle = {
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "4px",
        border: "1px solid #ccc",
        marginBottom: "8px",
    };

    const buttonStyle = {
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        borderRadius: "4px",
        border: "none",
        background: "#1877f2",
        color: "#fff",
        cursor: "pointer",
    };

    const successMessageStyle = {
        color: "#1877f2",
        fontSize: "18px",
        marginTop: "20px",
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "dbef2f90-48ce-4d75-95c2-beb218063b86");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setSubmitted(true); // Set the submitted state to true
        }
    };

    return (
        <div style={formContainerStyle}>
            <h2>Contact Us</h2>
            {!submitted ? (
                <form onSubmit={onSubmit}>
                    <div style={formGroupStyle}>
                        <input
                            style={inputStyle}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <input
                            style={inputStyle}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <textarea
                            style={textareaStyle}
                            name="message"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button style={buttonStyle} type="submit">
                        Submit Form
                    </button>
                </form>
            ) : (
                <p style={successMessageStyle}>Thank you for your submission!</p>
            )}
        </div>
    );
}

export default Contact;




