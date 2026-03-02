
"use client";
import { useState } from "react";

const servicesList = [
  "UAE Tax Agent Services",
  "VAT Registration Services in Dubai",
  "VAT Compliance in UAE",
  "VAT Return Filing Assistance",
  "VAT Deregistration in UAE",
  "Excise Tax Registration – UAE",
  "Excise Compliance Services",
  "Excise Advisory Services",
  "Bookkeeping & Accounting Outsourcing",
  "Accounting Review Services Dubai, UAE",
  "MIS Reporting Services in Dubai",
  "Bookkeeping Services in Saudi Arabia",
  "Avail Expert VAT Services in UAE",
  "International Taxation Consultants in Dubai, UAE",
  "Tax Residency Certification Assistance",
  "Economic Substance Regulations, UAE",
  "Payroll Services in Dubai",
  "Payroll Services in Qatar",
  "Audit Firms in Sharjah",
];

const serviceOptions = [
  "Tax Consultancy",
  "Accounting Services",
  "Business Setup",
];

const turnoverOptions = [
  "0-150K AED",
  "150K-500K AED",
  "500K-1M AED",
  "1M-5M AED",
  "5M+ AED",
];

export default function TaxConsultancyArea() {
  const [serviceRequired, setServiceRequired] = useState("Tax Consultancy");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Consultation request submitted!");
    // Form submission logic here
  };

  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="consultancy-container">
          <div className="consultancy-services">
            <ul className="consultancy-service-list">
              {servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className="consultancy-form">
            <div className="trial-booking-form">
              <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Free Consultation</h3>
              <form onSubmit={handleSubmit}>
                <div className="trial-form-field">
                   <label htmlFor="name" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>Name *</label>
                  <input id="name" type="text" required />
                </div>
                <div className="trial-form-field">
                  <label htmlFor="phone" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>Phone No*</label>
                  <div className="consultancy-phone-group">
                    <span>+971</span>
                    <input id="phone" type="tel" placeholder="050 123 4567" required />
                  </div>
                </div>
                <div className="trial-form-field">
                   <label htmlFor="email" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>Email *</label>
                  <input id="email" type="email" required />
                </div>
                <div className="trial-form-field">
                  <select required value={serviceRequired} onChange={(e) => setServiceRequired(e.target.value)}>
                    <option value="" disabled>Service Required *</option>
                    {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="trial-form-field">
                  <select required defaultValue="">
                    <option value="" disabled>What is your company’s annual turnover? *</option>
                     {turnoverOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="trial-form-field">
                    <label htmlFor="message" style={{fontSize: '0.8rem', color: '#757575', marginBottom: '4px', display: 'block'}}>Message *</label>
                  <textarea id="message" required></textarea>
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
