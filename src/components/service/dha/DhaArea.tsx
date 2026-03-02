
"use client";
import { useState, useRef } from "react";

const pricingData = [
  {
    govFee: 270,
    typingFee: 52.5,
    total: 322.5,
  },
  {
    govFee: 700,
    typingFee: 52.5,
    total: 752.5,
  },
  {
    govFee: 1020,
    typingFee: 52.5,
    total: 1072.5,
  },
  {
    govFee: 1020,
    typingFee: 52.5,
    total: 1072.5,
  },
];

export default function DhaArea({ dictionary }: { dictionary: any }) {
  const [selectedService, setSelectedService] = useState("");
  const [activeTab, setActiveTab] = useState('appointment'); // 'appointment' or 'enquiry'
  const [enquiryService, setEnquiryService] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  const handleBookAppointmentClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setActiveTab('appointment');
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

  const combinedPricing = dictionary.pricing.map((item: any, index: number) => ({
    ...item,
    ...pricingData[index],
  }));

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="trial-pricing-grid">
              {combinedPricing.map((item: any, index: number) => (
                <div key={index} className="trial-pricing-card">
                  <h3>{item.title}</h3>
                  <div className="trial-pricing-details">
                    <span>{dictionary.pricing_gov_fee}</span>
                    <span>{item.govFee.toFixed(1)}</span>
                  </div>
                  <div className="trial-pricing-details">
                    <span>{dictionary.pricing_typing_fee}</span>
                    <span>{item.typingFee.toFixed(1)}</span>
                  </div>
                  <div className="trial-pricing-details">
                    <strong>{dictionary.pricing_total}</strong>
                    <strong>{item.total.toFixed(1)}</strong>
                  </div>
                  <div className="trial-pricing-buttons">
                    <a href="#" className="trial-btn" onClick={(e) => { e.preventDefault(); handleBookAppointmentClick(item.title); }}>{dictionary.btn_book}</a>
                    <a href="#" className="trial-btn enquire" onClick={(e) => { e.preventDefault(); handleEnquiryClick(item.title); }}>{dictionary.btn_enquire}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="trial-faq-section">
              {dictionary.faq.map((faq: any, index: number) => (
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
                 <a 
                  href="#" 
                  className={`trial-btn ${activeTab === 'appointment' ? '' : 'enquire'}`} 
                  style={{ flex: 1 }}
                  onClick={(e) => { e.preventDefault(); setActiveTab('appointment'); }}
                >
                  {dictionary.form.tab_book}
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

               {activeTab === 'appointment' && (
                <form>
                  <div className="trial-form-field">
                    <input type="text" placeholder={dictionary.form.name_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input type="tel" placeholder={dictionary.form.phone_placeholder} />
                  </div>
                  <div className="trial-form-field">
                    <input type="email" placeholder={dictionary.form.email_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <select required value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                      <option value="">{dictionary.form.option_placeholder}</option>
                      {combinedPricing.map((p: any) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="trial-form-field">
                    <input type="date" placeholder={dictionary.form.date_placeholder} />
                  </div>
                  <button type="submit" className="trial-submit-btn">{dictionary.form.submit_button}</button>
                </form>
              )}

              {activeTab === 'enquiry' && (
                <form onSubmit={handleEnquirySubmit}>
                  <div className="trial-form-field">
                    <select value={enquiryService} onChange={(e) => setEnquiryService(e.target.value)} required>
                      <option value="">{dictionary.form.option_placeholder}</option>
                      {combinedPricing.map((p: any) => (
                        <option key={p.title} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="trial-submit-btn">{dictionary.form.enquiry_submit_button}</button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
