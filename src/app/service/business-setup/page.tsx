
"use client";
import { useState } from "react";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServicePageHeader from "@/components/service/ServicePageHeader";
import OtherServicesCarousel from "@/components/service/OtherServicesCarousel";

const businessServices = [
  {
    title: "Company Formation & Structuring",
    items: [
      "Mainland company formation (via Dubai Department of Economy and Tourism or respective emirate authority)",
      "Free Zone company formation (e.g., DMCC, IFZA, Dubai Silicon Oasis Authority)",
      "Offshore company incorporation",
      "Sole Establishment formation",
      "Civil Company setup",
      "Branch of Local / Foreign Company registration",
      "Legal structure advisory (LLC, FZE, FZCO, PJSC, etc.)",
      "Activity selection & approval",
    ],
  },
  {
    title: "Trade License Services",
    items: [
      "Commercial License",
      "Professional License",
      "Industrial License",
      "E-commerce License",
      "Consultancy License",
      "Freelance Permit",
      "License Renewal",
      "License Amendment (activity change, name change)",
      "License Upgrade / Downgrade",
      "License Cancellation",
    ],
  },
  {
    title: "Name Reservation & Initial Approvals",
    items: [
      "Trade Name Reservation",
      "Initial Approval Certificate",
      "MOA (Memorandum of Association) drafting",
      "LSA (Local Service Agent) agreement (if required)",
      "Notarization & legal documentation",
    ],
  },
  {
    title: "Visa & Immigration Services",
    subtitle: "(Handled through authorities like General Directorate of Residency and Foreigners Affairs)",
    items: [
      "Establishment Card (Immigration Card)",
      "Partner/Investor Visa",
      "Employment Visa",
      "Family Visa",
      "Visa Quota Approval",
      "Entry Permit Processing",
      "Status Change",
      "Medical Fitness Coordination",
      "Emirates ID Processing",
      "Visa Stamping",
      "Visa Renewal / Cancellation",
    ],
  },
  {
    title: "Labour & MOHRE Services",
    subtitle: "(Through Ministry of Human Resources and Emiratisation)",
    items: [
      "Labour Establishment Card",
      "Employment Contract Preparation",
      "Offer Letter Submission",
      "Work Permit Issuance",
      "Labour Quota Approval",
      "WPS Registration",
      "Labour Contract Amendment",
      "Labour Card Cancellation",
    ],
  },
  {
    title: "Corporate Banking Assistance",
    items: [
      "Bank account opening support",
      "KYC documentation preparation",
      "Business plan drafting (if required by bank)",
      "Compliance documentation support",
    ],
  },
  {
    title: "Office & Infrastructure Setup",
    items: [
      "Ejari Registration (for mainland)",
      "Virtual Office Solutions",
      "Flexi-desk arrangements (Free Zones)",
      "Physical Office Leasing",
      "Warehouse leasing",
      "PO Box registration",
    ],
  },
  {
    title: "Compliance & Post-Setup Services",
    items: [
      "VAT Registration (via Federal Tax Authority)",
      "Corporate Tax Registration",
      "Accounting & Bookkeeping",
      "ESR Filing (Economic Substance Regulations)",
      "UBO Declaration",
      "Annual Audit Coordination",
      "Customs Code Registration",
      "Municipality approvals",
      "Chamber of Commerce registration",
    ],
  },
  {
    title: "Value-Added Services",
    items: [
      "Trademark Registration",
      "Document Attestation",
      "Translation Services",
      "PRO Services",
      "Insurance Assistance",
      "Business Plan Preparation",
      "Market Entry Advisory",
    ],
  },
];


const serviceOptions = [
  "Business Setup",
  "Accounting Services",
  "Tax Consultancy",
];

const turnoverOptions = [
  "0-150K AED",
  "150K-500K AED",
  "500K-1M AED",
  "1M-5M AED",
  "5M+ AED",
];

export default function BusinessSetup() {
  const [serviceRequired, setServiceRequired] = useState("Business Setup");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Consultation request submitted!");
    // Form submission logic here
  };

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <ServicePageHeader
            logoSrc="/assets/images/service/business.jpg"
            logoAlt="Business Setup"
            title="Business Setup"
            subtitle="Comprehensive assistance for setting up your new business in Dubai."
          />
          <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
            <div className="container">
              <div className="consultancy-container">
                <div className="consultancy-services">
                  <p style={{marginBottom: '2rem'}}>We specialize in setting up business mainland and Freezones in UAE, Bahrain, Qatar, KSA and EGYPT by providing following services:</p>
                  <div className="consultancy-service-list">
                    {businessServices.map((category, index) => (
                      <div key={index} style={{ breakInside: 'avoid', pageBreakInside: 'avoid', marginBottom: '2.5rem' }}>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#bd8c2e', marginBottom: '1rem', fontFamily: '"Baloo Thambi 2", system-ui' }}>{category.title}</h4>
                        {category.subtitle && <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '-0.75rem', marginBottom: '1rem' }}>{category.subtitle}</p>}
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
          <OtherServicesCarousel />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
