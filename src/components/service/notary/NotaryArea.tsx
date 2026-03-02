
"use client";
import { useState, useRef } from "react";

export default function NotaryArea({ dictionary }: { dictionary: any }) {
  const [selectedService, setSelectedService] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  const handleBookAppointmentClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    if (formRef.current) {
      const yOffset = -140; // Accounts for sticky header
      const y = formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment submitted!");
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="notary-service-grid">
              {dictionary.services.map((item: any, index: number) => (
                <div key={index} className="notary-service-card">
                  <div className="notary-service-header">
                    <div className="notary-service-number">{item.number}</div>
                    <h3 className="notary-service-title">{item.title}</h3>
                  </div>
                  <p className="notary-service-description">{item.description}</p>
                  <a
                    href="#"
                    className="trial-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      handleBookAppointmentClick(item.title);
                    }}
                  >
                    {dictionary.form.book_button}
                  </a>
                </div>
              ))}
            </div>

            <div className="trial-faq-section" style={{ marginTop: "4rem" }}>
              {dictionary.faq.map((faq: any, index: number) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <p className="trial-faq-answer" style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar" ref={formRef}>
            <div className="trial-booking-form" style={{ position: 'sticky', top: '140px' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>{dictionary.form.title}</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="trial-form-field">
                  <input type="text" placeholder={dictionary.form.name_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input type="tel" placeholder={dictionary.form.phone_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input type="email" placeholder={dictionary.form.email_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <select
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">{dictionary.form.option_placeholder}</option>
                    {dictionary.services.map((p: any) => (
                      <option key={p.title} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="trial-form-field">
                   <input type="date" required />
                </div>
                <button type="submit" className="trial-submit-btn">
                  {dictionary.form.submit_button}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
