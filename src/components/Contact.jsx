
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="aura-section container">
      <div className="aura-section-heading" data-aos="fade-up">
        <span className="aura-eyebrow">LET'S CONNECT</span>
        <h1>We are here for <em>you.</em></h1>
        <p>Have a question about skincare? Send us a message.</p>
      </div>

      <div className="aura-contact-layout">
        <div className="aura-contact-info">
          <i className="bi bi-chat-heart" />
          <h3>Let's talk skincare.</h3>
          <p>
            Share your questions, feedback, or product enquiries
            with the SkinAura team.
          </p>

          <div className="aura-contact-detail">
            <i className="bi bi-envelope" />
            <div>
              <strong>Email</strong>
              <p>hello@skinaura.example</p>
            </div>
          </div>

          <div className="aura-contact-detail">
            <i className="bi bi-clock" />
            <div>
              <strong>Response hours</strong>
              <p>Monday–Saturday, 10 AM–6 PM</p>
            </div>
          </div>
        </div>

        <form className="aura-contact-form" onSubmit={handleSubmit}>
          <label htmlFor="auraName">Your name</label>
          <input id="auraName" name="name" className="form-control"
            placeholder="Enter your name" required />

          <label htmlFor="auraEmail">Email address</label>
          <input id="auraEmail" name="email" type="email"
            className="form-control" placeholder="you@example.com" required />

          <label htmlFor="auraSubject">Subject</label>
          <select id="auraSubject" name="subject" className="form-select"
            defaultValue="" required>
            <option value="" disabled>Select a subject</option>
            <option>Product enquiry</option>
            <option>Skin type guide</option>
            <option>Order enquiry</option>
            <option>Other</option>
          </select>

          <label htmlFor="auraMessage">Your message</label>
          <textarea id="auraMessage" name="message" className="form-control"
            rows="5" placeholder="How can we help?" required />

          <button type="submit" className="aura-button mt-4">
            Send message <i className="bi bi-arrow-up-right" />
          </button>

          {submitted && (
            <p className="aura-success">
              Thank you! Your demo message has been submitted.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
