
"use client";
import { useState, useRef } from "react";

export default function TypingArea({ dictionary }: { dictionary: any }) {
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
        alert(dictionary.form.enquiry_no_service_alert);
        return;
    }
    const message = encodeURIComponent(`I would like to enquire about the ${enquiryService} service.`);
    const whatsappUrl = `https://wa.me/9710557093431?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-pricing-grid">
              {dictionary.services.map((item: any, index: number) => (
                <div key={index} className="trial-pricing-card">
                  <h3>{item.title}</h3>
                  <div className="trial-pricing-buttons" style={{marginTop: '2rem'}}>
                    <a href="#" className="trial-btn" onClick={(e) => { e.preventDefault(); handleRegisterClick(item.title); }}>{dictionary.btn_register}</a>
                    <a href="#" className="trial-btn enquire" onClick={(e) => { e.preventDefault(); handleEnquiryClick(item.title); }}>{dictionary.btn_enquire}</a>
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
                  {dictionary.form.tab_register}
                </a>
                <a 
                  href="#" 
                  className={`trial-btn ${activeTab === 'enquiry' ? '' : 'enquire'}`} 
                  style={{ flex: 1 }}
                  onClick={(e) => { e.preventDefault(); setActiveTab('enquiry'); }}
                >
                  {dictionary.form.tab_enquire}
                </a>
              </div>

               {activeTab === 'register' && (
                <form>
                  <div className="trial-form-field">
                    <input type="text" placeholder={dictionary.form.name_placeholder} required />
                  </div>
                   <div className="trial-form-field">
                    <input type="email" placeholder={dictionary.form.email_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input type="tel" placeholder={dictionary.form.phone_placeholder} required/>
                  </div>
                  <div className="trial-form-field">
                    <select required value={selectedDocumentType} onChange={(e) => setSelectedDocumentType(e.target.value)}>
                      <option value="">{dictionary.form.document_type_placeholder}</option>
                      {dictionary.services.map((p: any) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="trial-form-field">
                     <label style={{marginBottom: '8px', display: 'block', color: '#555', fontSize: '0.9rem'}}>{dictionary.form.upload_label}</label>
                    <input type="file" />
                  </div>
                  <div className="trial-form-field">
                    <textarea placeholder={dictionary.form.notes_placeholder}></textarea>
                  </div>
                  <button type="submit" className="trial-submit-btn">{dictionary.form.submit_button}</button>
                </form>
              )}

              {activeTab === 'enquiry' && (
                <form onSubmit={handleEnquirySubmit}>
                  <div className="trial-form-field">
                    <select value={enquiryService} onChange={(e) => setEnquiryService(e.target.value)} required>
                      <option value="">{dictionary.form.enquiry_option_placeholder}</option>
                      {dictionary.services.map((p: any) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="trial-submit-btn">{dictionary.form.enquiry_button}</button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
