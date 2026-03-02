
"use client";
import { useState } from "react";

const accountingServices = [
  {
    title: "Bookkeeping & Accounting",
    items: [
      "Daily / Monthly / Quarterly Bookkeeping",
      "Accounts Payable & Receivable Management",
      "General Ledger Maintenance",
      "Bank Reconciliation",
      "Cash Flow Monitoring",
      "Payroll Accounting",
      "Fixed Asset Register Maintenance",
      "Inventory Accounting",
      "MIS Reporting",
      "Financial Statement Preparation (Monthly / Annual)",
    ],
  },
  {
    title: "Audit & Assurance Services",
    items: [
      "External Statutory Audit",
      "Internal Audit",
      "Management Audit",
      "Forensic Audit",
      "Compliance Audit",
      "Stock Audit",
      "Liquidation Audit",
      "IFRS Compliance Review",
      "Due Diligence Review",
      "Agreed-Upon Procedures (AUP)",
    ],
  },
  {
    title: "Financial Reporting & Advisory",
    items: [
      "IFRS Implementation",
      "Financial Statement Preparation",
      "Consolidated Financial Statements",
      "Budgeting & Forecasting",
      "Financial Modelling",
      "Cash Flow Projections",
      "Business Valuation",
      "Feasibility Studies",
      "Ratio Analysis & Performance Review",
    ],
  },
];


const serviceOptions = [
  "Accounting Services",
  "Tax Consultancy",
  "Business Setup",
];

const turnoverOptions = [
  "0-150K AED",
  "150K-500K AED",
  "500K-1M AED",
  "1M-5M AED",
  "5M+ AED",
];

export default function AccountingArea() {
  const [serviceRequired, setServiceRequired] = useState("Accounting Services");

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
            <div className="consultancy-service-list">
               {accountingServices.map((category, index) => (
                <div key={index} style={{ breakInside: 'avoid', pageBreakInside: 'avoid', marginBottom: '2.5rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#bd8c2e', marginBottom: '1rem', fontFamily: '"Baloo Thambi 2", system-ui' }}>{category.title}</h4>
                  <ul>
                    {category.items.map((service, i) => (
                      <li key={i} style={{marginBottom: '0.5rem'}}>{service}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
