
"use client";
import { useState } from "react";

const processSteps = [
  {
    step: "01",
    title: "Register for Tawjeeh",
    description: "We schedule your Tawjeeh session on your behalf.",
  },
  {
    step: "02",
    title: "Document Submission",
    description:
      "Passport copy, Visa copy, Emirates ID (if available), Labor contract or offer letter etc.",
  },
  {
    step: "03",
    title: "Select Language",
    description:
      "Customer chooses preferred session language (Arabic / English / Urdu etc.).",
  },
  {
    step: "04",
    title: "Attend the Seminar",
    description:
      "Customer attends Tawjeeh class at the selected center. Duration: approximately 45–60 minutes.",
  },
  {
    step: "05",
    title: "Receive Completion Certificate",
    description:
      "Completion is updated in the MOHRE (Ministry of Human Resources & Emiratisation) system automatically.",
  },
];

const faqData = [
  {
    question: "What is Tawjeeh?",
    answer:
      "Tawjeeh is a MOHRE-approved service center that provides awareness and orientation services to employees and employers about UAE labor laws, employment rights, and responsibilities.",
  },
  {
    question: "What services does Tawjeeh provide?",
    answer:
      "Tawjeeh centers offer:\n\nEmployment contract guidance\nOffer letter issuance and signing\nLabor complaints registration\nLegal consultation regarding labor rights\nPre-employment orientation sessions\nAttestation of job offers and employment contracts",
  },
  {
    question: "Who should visit a Tawjeeh center?",
    answer:
      "New employees (for mandatory orientation before signing a labor contract)\nEmployers and PROs (for processing labor contracts and related services)\nEmployees facing labor disputes or needing legal guidance",
  },
  {
    question: "Is visiting Tawjeeh mandatory for all new employees?",
    answer:
      "Yes. For private sector jobs under MOHRE, all new expatriate employees must attend a mandatory awareness session before contract finalization.",
  },
  {
    question: "Can I get my labor contract from Tawjeeh?",
    answer:
      "Yes. You can collect, review, and even sign your labor contract at Tawjeeh centers after attending the orientation.",
  },
  {
    question: "Can Tawjeeh help resolve labor complaints?",
    answer:
      "Yes. Tawjeeh can register complaints and forward them to MOHRE. They also offer initial legal guidance and may help resolve disputes amicably before legal escalation.",
  },
  {
    question: "Is Tawjeeh the same as Tasheel?",
    answer:
      "No.\n\nTawjeeh focuses on education, awareness, and legal advice.\nTasheel handles processing and typing of labor documents like work permits, contract modifications, etc.",
  },
  {
    question: "What documents are needed for Tawjeeh services?",
    answer:
      "Generally:\n\nValid Emirates ID\nPassport copy\nVisa copy\nMOHRE offer letter or contract (if applicable)",
  },
  {
    question: "What are the working hours of Karama Business Center?",
    answer: "Our center operate from 8:00 AM to 8:00 PM, Monday to Saturday.",
  },
  {
    question: "Do I need an appointment for Tawjeeh services?",
    answer:
      "Usually, yes — especially for orientation sessions. You can book through the above submission form or Call/WhatsApp: 04-3991744",
  },
  {
    question: "Are Tawjeeh services free?",
    answer:
      "Most orientation services are free for employees. However, employers may be charged for contract attestations or other processing depending on the service.",
  },
  {
    question: "What languages are Tawjeeh services offered in?",
    answer:
      "Tawjeeh centers provide services in multiple languages including Arabic, English, Hindi, Urdu, and Tagalog, to ensure clear communication with workers.",
  },
];

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

export default function TawjeehArea() {
  const [activeTab, setActiveTab] = useState("appointment");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Appointment Submitted!");
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `I would like to enquire about the Taw-Jeeh service.`
    );
    const whatsappUrl = `https://wa.me/9710557093431?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <h3 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
              Step by step Process
            </h3>
            <div className="tawjeeh-process-wrapper">
              {processSteps.map((item) => (
                <TawjeehProcessStep key={item.step} {...item} />
              ))}
            </div>

            <div className="trial-faq-section" style={{ marginTop: "4rem" }}>
              {faqData.map((faq, index) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <div className="trial-faq-answer">
                    {faq.answer.split("\n").map((line, i) => (
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
                  Book appointment
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
                  Enquire
                </a>
              </div>

              {activeTab === "appointment" && (
                <form onSubmit={handleFormSubmit}>
                  <div className="trial-form-field">
                    <input type="text" placeholder="Full Name *" required />
                  </div>
                  <div className="trial-form-field">
                    <input type="email" placeholder="Email Address *" required />
                  </div>
                  <div className="trial-form-field">
                    <input type="tel" placeholder="Phone Number *" required />
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
                      Session attending date *
                    </label>
                    <input type="date" required />
                  </div>
                  <button type="submit" className="trial-submit-btn">
                    Submit Appointment
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
                    Click the button below to send us a WhatsApp message for
                    your enquiry about our Taw-Jeeh services.
                  </p>
                  <button type="submit" className="trial-submit-btn">
                    Enquire on WhatsApp
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
