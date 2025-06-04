import { useScroll } from "./useScroll"
import { useState } from "react";
//Styles
import { Contact, ContactForm } from "../styles";
//Animations
import Wave from "./Wave";
import ScrollToTop from "../ScrollToTop";
import { scrollReveal } from "../animation";

const ContactSection = () => {
    const[element, controls] = useScroll();
    const [showThankYou, setShowThankYou] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send to Netlify
        const form = e.target;
        const data = new FormData(form);

        fetch("/", {
            method: "POST",
            body: data,
        }).then(() => {
            setShowThankYou(true);
            form.reset(); // optional: clear form

        setTimeout(() => {
            setShowThankYou(false);
        }, 5000);
        }).catch((error) => {
        alert("Submission failed: " + error.message);
        });
    };

    return(
        <Contact id="contact-section"
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}>
            <h2>Contact Me</h2>
            <ContactForm>
                <p>Have a question or want to connect? Leave your message and I will get back to you as soon as possible!</p>
                <form name="contact" action="showThankYou" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>Don’t fill this out: <input name="bot-field" /></label>
                    </p>
                    <input type="text" placeholder="Name" name="name" class="contact-inputs" required/>
                    <input type="email" placeholder="Email" name="email" class="contact-inputs" required/>
                    <textarea placeholder="Message" name="message" rows="5" class="contact-inputs" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </ContactForm>
            {showThankYou && (
                <div className="thank-you-message">Thank you!</div>
            )}
            <Wave />
            <ScrollToTop />
            <form name="test-contact" method="POST" data-netlify="true">
                <input type="text" name="name" />
                <button type="submit">Send</button>
            </form>
        </Contact>
    );
};

export default ContactSection;