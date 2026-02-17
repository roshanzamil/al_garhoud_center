"use client";
import { useState, useRef } from "react";

const serviceData = [
  {
    number: "01",
    title: "Power of Attorney (POA)",
    description: "Authorize someone to act on your behalf legally, with general or specific powers.",
  },
  {
    number: "02",
    title: "Declaration & Affidavits",
    description: "Submit personal or legal declarations attested by an official notary.",
  },
  {
    number: "03",
    title: "Memorandum of Understanding",
    description: "Document mutual agreements between parties before final contracts.",
  },
  {
    number: "04",
    title: "Partnership Agreements",
    description: "Define and notarize business terms between partners in a clear legal format.",
  },
  {
    number: "05",
    title: "Sale & Purchase Contracts",
    description: "Legally bind buyer and seller terms for property, goods, or assets.",
  },
  {
    number: "06",
    title: "Legal Translations",
    description: "Accurately translate and notarize documents as required by UAE law.",
  },
];

const faqData = [
    {
        question: "What is Dubai Courts?",
        answer: "Dubai Courts is the official judicial authority in the Emirate of Dubai, handling various legal disputes including civil, criminal, family, commercial, real estate, labor, and inheritance matters."
    },
    {
        question: "What services does Dubai Courts provide?",
        answer: "Dubai Courts operate across three main levels:\n\nCourt of First Instance\nCourt of Appeal\nCourt of Cassation (Supreme Court level)"
    },
    {
        question: "How can I file a case in Dubai Courts?",
        answer: "You may personally visit Karama Business Center near Central Post Office Karama or enquire by using the above submission for or WhatsApp: 04-3426666"
    },
    {
        question: "What documents are required to file a case?",
        answer: "Generally:\n\nEmirates ID and passport copies\nLegal documents (contracts, evidence, etc.)\nPOA (if filing through a lawyer)\nPayment of court fees (varies by case type)"
    },
    {
        question: "Can I track my case online?",
        answer: "Yes."
    },
    {
        question: "What kinds of cases are handled by Dubai Courts?",
        answer: "Dubai Courts handle:\n\nCivil cases (contract disputes, debt recovery, property)\nCriminal cases (theft, fraud, assault, etc.)\nFamily cases (divorce, alimony, custody)\nLabor cases (unpaid wages, unfair dismissal)\nCommercial and real estate cases\nInheritance and wills"
    },
    {
        question: "Can I file a labor case directly at Dubai Courts?",
        answer: "No. Labor disputes must first go through the MOHRE (Ministry of Human Resources and Emiratisation) for mediation. If unresolved, MOHRE refers the case to Dubai Courts."
    },
    {
        question: "How long does a case take in Dubai Courts?",
        answer: "Timelines vary by case:\n\nCivil/Labor: ~2–6 months\nFamily cases: ~1–3 months\nAppeals or Cassation: Can take longer depending on complexity"
    },
    {
        question: "Can I represent myself in court?",
        answer: "Yes. In civil and minor cases, individuals can self-represent. However, legal representation is strongly advised for complex or criminal cases."
    },
    {
        question: "What language is used in Dubai Courts?",
        answer: "All court proceedings are in Arabic. Legal documents must be translated to Arabic by a certified translator."
    },
    {
        question: "Is legal aid available in Dubai Courts?",
        answer: "Yes. Dubai Courts offers pro bono legal aid for those who qualify (e.g., low-income individuals in specific case types)."
    }
];

export default function NotaryArea() {
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
    <section className="azzle-section-padding">
      <div className="container">
        <div className="trial-pricing-container">
          <div className="trial-pricing-main">
            <div className="notary-service-grid">
              {serviceData.map((item, index) => (
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
                    Book appointment
                  </a>
                </div>
              ))}
            </div>

            <div className="trial-faq-section" style={{ marginTop: "4rem" }}>
              {faqData.map((faq, index) => (
                <div key={index} className="trial-faq-item">
                  <h4 className="trial-faq-question">{faq.question}</h4>
                  <p className="trial-faq-answer" style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="trial-pricing-sidebar" ref={formRef}>
            <div className="trial-booking-form" style={{ position: 'sticky', top: '140px' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Book an Appointment</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="trial-form-field">
                  <input type="text" placeholder="Full Name *" required />
                </div>
                <div className="trial-form-field">
                  <input type="tel" placeholder="Phone Number *" required />
                </div>
                <div className="trial-form-field">
                  <input type="email" placeholder="Email Address *" required />
                </div>
                <div className="trial-form-field">
                  <select
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">—Please choose an option—</option>
                    {serviceData.map((p) => (
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
