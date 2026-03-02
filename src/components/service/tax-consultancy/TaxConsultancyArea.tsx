
"use client";
import { useState } from "react";

export default function TaxConsultancyArea({ dictionary }: { dictionary: any }) {
  const [serviceRequired, setServiceRequired] = useState(dictionary.form.service_options[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Consultation request submitted!");
    // Form submission logic here
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="consultancy-container">
          <div className="consultancy-services">
            <ul className="consultancy-service-list">
              {dictionary.services.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="consultancy-form">
            <div className="trial-booking-form">
              <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>{dictionary.form.title}</h3>
              <form onSubmit={handleSubmit}>
                <div className="trial-form-field">
                   <label htmlFor="name" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>{dictionary.form.name_label}</label>
                  <input id="name" type="text" required />
                </div>
                <div className="trial-form-field">
                  <label htmlFor="phone" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>{dictionary.form.phone_label}</label>
                  <div className="consultancy-phone-group">
                    <span>+971</span>
                    <input id="phone" type="tel" placeholder={dictionary.form.phone_placeholder} required />
                  </div>
                </div>
                <div className="trial-form-field">
                   <label htmlFor="email" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>{dictionary.form.email_label}</label>
                  <input id="email" type="email" required />
                </div>
                <div className="trial-form-field">
                  <select required value={serviceRequired} onChange={(e) => setServiceRequired(e.target.value)}>
                    <option value="" disabled>{dictionary.form.service_label}</option>
                    {dictionary.form.service_options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="trial-form-field">
                  <select required defaultValue="">
                    <option value="" disabled>{dictionary.form.turnover_label}</option>
                     {dictionary.form.turnover_options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="trial-form-field">
                    <label htmlFor="message" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>{dictionary.form.message_label}</label>
                  <textarea id="message" required></textarea>
                </div>
                <button type="submit" className="trial-submit-btn">{dictionary.form.submit_button}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
