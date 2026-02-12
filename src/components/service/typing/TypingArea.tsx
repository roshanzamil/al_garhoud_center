"use client";
import { useState, useRef } from "react";

const pricingData = [
  {
    title: "Normal (24 HR)",
    govFee: 270,
    typingFee: 52.5,
    total: 322.5,
  },
  {
    title: "Express (6 HR)",
    govFee: 700,
    typingFee: 52.5,
    total: 752.5,
  },
  {
    title: "VIP (2 HR)",
    govFee: 1020,
    typingFee: 52.5,
    total: 1072.5,
  },
  {
    title: "Tawajood",
    govFee: 1020,
    typingFee: 52.5,
    total: 1072.5,
  },
];

const faqData = [
  {
    question: "What is the DHA medical test?",
    answer: "It is a mandatory medical fitness test required for residency, employment, or visa renewal in Dubai. It checks for infectious diseases that may affect public health.",
  },
  {
    question: "Who needs to take the DHA medical test?",
    answer: "Anyone applying for a new residence visa or renewing an existing one in Dubai, including domestic workers, professionals, and dependents.",
  },
  {
    question: "What does the DHA medical test include?",
    answer: "Blood test (to check for infectious diseases like HIV, Hepatitis B & C) and Chest X-ray (to check for tuberculosis - TB).",
  },
  {
    question: "Is fasting required before the test?",
    answer: "No, fasting is not required for the DHA medical test.",
  },
  {
    question: "How do I book an appointment for the DHA medical test?",
    answer: "You can book online via our booking form on this page or contact us for assistance.",
  },
];

export default function TypingArea() {
  const [selectedService, setSelectedService] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleBookAppointmentClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-pricing-grid">
              {pricingData.map((item, index) => (
                <div key={index} className="trial-pricing-card">
                  <h3>{item.title}</h3>
                  <div className="trial-pricing-details">
                    <span>Government Fee:</span>
                    <span>{item.govFee.toFixed(1)}</span>
                  </div>
                  <div className="trial-pricing-details">
                    <span>Typing Fee:</span>
                    <span>{item.typingFee.toFixed(1)}</span>
                  </div>
                  <div className="trial-pricing-details">
                    <strong>Govt Fee (Incl. Typing Fee):</strong>
                    <strong>{item.total.toFixed(1)}</strong>
                  </div>
                  <div className="trial-pricing-buttons">
                    <a href="#" className="trial-btn" onClick={(e) => { e.preventDefault(); handleBookAppointmentClick(item.title); }}>Book appointment</a>
                    <a href="#" className="trial-btn enquire">Enquire</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="trial-faq-section">
              {faqData.map((faq, index) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <p className="trial-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar" ref={formRef}>
            <div className="trial-booking-form">
              <div className="trial-booking-form-header">
                <a href="#" className="trial-btn" style={{ flex: 1 }}>Book appointment</a>
                <a href="#" className="trial-btn enquire" style={{ flex: 1 }}>Enquire</a>
              </div>
              <form>
                <div className="trial-form-field">
                  <input type="text" placeholder="Full Name *" required />
                </div>
                <div className="trial-form-field">
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="trial-form-field">
                  <input type="email" placeholder="Email Address *" required />
                </div>
                <div className="trial-form-field">
                  <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                    <option value="">-Please Choose An Option-</option>
                     {pricingData.map((p) => (
                      <option key={p.title} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                </div>
                <div className="trial-form-field">
                  <input type="date" placeholder="dd/mm/yyyy" />
                </div>
                <button type="submit" className="trial-submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
