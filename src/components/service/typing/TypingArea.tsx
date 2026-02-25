"use client";
import { useState, useRef } from "react";

const typingServices = [
  { title: "Visa Typing" },
  { title: "Medical Typing" },
  { title: "Emirates ID Typing" },
  { title: "Trade License" },
];

export default function TypingArea() {
  const [selectedDocumentType, setSelectedDocumentType] = useState("");
  const [activeTab, setActiveTab] = useState('register');
  const [enquiryService, setEnquiryService] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  const handleRegisterClick = (serviceTitle: string) => {
    setSelectedDocumentType(serviceTitle);
    setActiveTab('register');
    if (formRef.current) {
      const yOffset = -140; // Accounts for sticky header
      const y = formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  const handleEnquiryClick = (serviceTitle: string) => {
    setEnquiryService(serviceTitle);
    setActiveTab('enquiry');
    if (formRef.current) {
      const yOffset = -140; // Accounts for sticky header
      const y = formRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryService) {
        alert("Please select a service to enquire about.");
        return;
    }
    const message = encodeURIComponent(`I would like to enquire about the ${enquiryService} service.`);
    const whatsappUrl = `https://wa.me/9710557093431?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-pricing-grid">
              {typingServices.map((item, index) => (
                <div key={index} className="trial-pricing-card">
                  <h3>{item.title}</h3>
                  <div className="trial-pricing-buttons" style={{marginTop: '2rem'}}>
                    <a href="#" className="trial-btn" onClick={(e) => { e.preventDefault(); handleRegisterClick(item.title); }}>Register</a>
                    <a href="#" className="trial-btn enquire" onClick={(e) => { e.preventDefault(); handleEnquiryClick(item.title); }}>Enquire</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar" ref={formRef}>
            <div className="trial-booking-form">
              <div className="trial-booking-form-header">
                 <a 
                  href="#" 
                  className={`trial-btn ${activeTab === 'register' ? '' : 'enquire'}`} 
                  style={{ flex: 1 }}
                  onClick={(e) => { e.preventDefault(); setActiveTab('register'); }}
                >
                  Register
                </a>
                <a 
                  href="#" 
                  className={`trial-btn ${activeTab === 'enquiry' ? '' : 'enquire'}`} 
                  style={{ flex: 1 }}
                  onClick={(e) => { e.preventDefault(); setActiveTab('enquiry'); }}
                >
                  Enquire
                </a>
              </div>

               {activeTab === 'register' && (
                <form>
                  <div className="trial-form-field">
                    <input type="text" placeholder="Full Name *" required />
                  </div>
                   <div className="trial-form-field">
                    <input type="email" placeholder="Email Address *" required />
                  </div>
                  <div className="trial-form-field">
                    <input type="tel" placeholder="Phone Number *" required/>
                  </div>
                  <div className="trial-form-field">
                    <select required value={selectedDocumentType} onChange={(e) => setSelectedDocumentType(e.target.value)}>
                      <option value="">- Document Type * -</option>
                      {typingServices.map((p) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="trial-form-field">
                     <label style={{marginBottom: '8px', display: 'block', color: '#555', fontSize: '0.9rem'}}>Upload Document (optional)</label>
                    <input type="file" />
                  </div>
                  <div className="trial-form-field">
                    <textarea placeholder="Any additional notes (optional)"></textarea>
                  </div>
                  <button type="submit" className="trial-submit-btn">Submit Typing Request</button>
                </form>
              )}

              {activeTab === 'enquiry' && (
                <form onSubmit={handleEnquirySubmit}>
                  <div className="trial-form-field">
                    <select value={enquiryService} onChange={(e) => setEnquiryService(e.target.value)} required>
                      <option value="">-Please Choose An Option-</option>
                      {typingServices.map((p) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="trial-submit-btn">Enquire</button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
