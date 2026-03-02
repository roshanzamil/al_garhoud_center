
"use client";
import { useState } from "react";

const TawjeehProcessStep = ({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) => (
  <div className="tawjeeh-process-step">
    <div className="tawjeeh-process-step-number">{step}</div>
    <div className="tawjeeh-process-step-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

export default function TawjeehArea({ dictionary }: { dictionary: any }) {
  const [activeTab, setActiveTab] = useState("appointment");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Appointment Submitted!");
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(dictionary.form.whatsapp_message);
    const whatsappUrl = `https://wa.me/9710557093431?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <h3 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
              {dictionary.process_title}
            </h3>
            <div className="tawjeeh-process-wrapper">
              {dictionary.process_steps.map((item: any) => (
                <TawjeehProcessStep key={item.step} {...item} />
              ))}
            </div>

            <div className="trial-faq-section" style={{ marginTop: "4rem" }}>
              {dictionary.faq.map((faq: any, index: number) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <div className="trial-faq-answer">
                    {faq.answer.split("\n").map((line: string, i: number) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar">
            <div
              className="trial-booking-form"
              style={{ position: "sticky", top: "140px" }}
            >
              <div className="trial-booking-form-header">
                <a
                  href="#"
                  className={`trial-btn ${
                    activeTab === "appointment" ? "" : "enquire"
                  }`}
                  style={{ flex: 1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("appointment");
                  }}
                >
                  {dictionary.form.tab_book}
                </a>
                <a
                  href="#"
                  className={`trial-btn ${
                    activeTab === "enquiry" ? "" : "enquire"
                  }`}
                  style={{ flex: 1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("enquiry");
                  }}
                >
                  {dictionary.form.tab_enquire}
                </a>
              </div>

              {activeTab === "appointment" && (
                <form onSubmit={handleFormSubmit}>
                  <div className="trial-form-field">
                    <input type="text" placeholder={dictionary.form.name_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input type="email" placeholder={dictionary.form.email_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <input type="tel" placeholder={dictionary.form.phone_placeholder} required />
                  </div>
                  <div className="trial-form-field">
                    <label
                      style={{
                        marginBottom: "8px",
                        display: "block",
                        color: "#555",
                        fontSize: "0.9rem",
                      }}
                    >
                      {dictionary.form.date_label}
                    </label>
                    <input type="date" required />
                  </div>
                  <button type="submit" className="trial-submit-btn">
                    {dictionary.form.submit_button}
                  </button>
                </form>
              )}
              {activeTab === "enquiry" && (
                <form onSubmit={handleEnquirySubmit}>
                  <p
                    style={{
                      textAlign: "center",
                      margin: "2rem 0",
                      color: "#555",
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {dictionary.form.enquiry_text}
                  </p>
                  <button type="submit" className="trial-submit-btn">
                    {dictionary.form.enquiry_button}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
