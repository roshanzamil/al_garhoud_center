

"use client";
import { useState } from "react";
import Link from "next/link"; 
 

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faq_data: FaqItem[] = [
  {
    id: 1,
    question: "What services does Al Garhoud Center provide?",
    answer:
      "We offer a wide range of government services, including visa processing, Emirates ID typing, medical fitness applications and various approvals from Amer, DET and DHA.",
  },
  {
    id: 2,
    question: "What are your operating hours?",
    answer:
      "Our center is open from 7:30 AM to 8:00 PM, Saturday to Thursday, to provide you with flexible and convenient service options for all your needs.",
  },
  {
    id: 3,
    question: "Do I need an appointment to visit the center?",
    answer:
      "No appointment is necessary for most of our services. You can visit us during our operating hours, and our team will be ready to assist you promptly.",
  },
];


interface StyleProps {
  style_2?: boolean;
}

export default function FaqHomeOne({ style_2 = false }: StyleProps) {
  const [activeId, setActiveId] = useState<number>(1); 

  const toggleFaq = (index: number) => {
      if (activeId === index) {
      setActiveId(-1);
    } else {
      setActiveId(index);
    }
  };

 



  return (
    <section className={`${style_2 ? 'azzle-section-padding6' : 'azzle-section-padding pt-0'}`}>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-6">
            <div
              className="azzle-default-content"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h2>Have Questions? We Have Answers.</h2>
              <p>
                Our team is ready to provide you with the information you need. Find answers to common questions about our services, processes and how we can help you navigate government procedures with ease.
              </p>
              <div className="mt-50">
                <Link
                  className="azzle-default-btn"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  href="/faq"
                  data-text="More questions"
                >
                  <span className="button-wraper">More questions</span>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ items */}
          <div className="col-lg-5 offset-lg-1">
            <div
              className="azzle-faq-wrap1"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {faq_data.map((faq) => (
                <div
                  key={faq.id}
                  className={`azzle-faq-item ${
                    activeId === faq.id ? "open" : ""
                  }`}
                >
                  <div
                    className="azzle-faq-header"
                    onClick={() => toggleFaq(faq.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{faq.question}</h3>
                    <div className="azzle-active-icon">
                      <img
                        src="assets/images/home1/+.svg"
                        alt="toggle"
                        style={{
                          transform:
                            activeId === faq.id ? "rotate(45deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                  {activeId === faq.id && (
                    <div className="azzle-faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
