"use client";
import { useState } from "react";

const faqData = [
  {
    uuid: "a",
    question: "Can I pay for my studies in installments?",
    answer: "Yes, you can typically arrange to pay your tuition fees in installments.",
  },
  {
    uuid: "b",
    question: "How do I find out about scholarships?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    uuid: "c",
    question: "How do I apply for a scholarship?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    uuid: "d",
    question: "What courses are available?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    uuid: "e",
    question: "How do I know if I meet the entry requirements?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function FaqHomeOne() {
  const [openItems, setOpenItems] = useState<string[]>(["a"]);

  const toggleItem = (uuid: string) => {
    if (openItems.includes(uuid)) {
      setOpenItems(openItems.filter((item) => item !== uuid));
    } else {
      setOpenItems([...openItems, uuid]);
    }
  };


  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="azzle-faq-wraper" data-aos="fade-right" data-aos-delay="500">
              <div className="accordion">
                {faqData.map((item) => (
                  <div
                    key={item.uuid}
                    className={`accordion-item ${openItems.includes(item.uuid) ? "open" : ""}`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleItem(item.uuid)}
                    >
                      <button className="accordion-button">
                        {item.question}
                      </button>
                    </div>
                    {openItems.includes(item.uuid) && (
                      <div className="accordion-panel">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="azzle-faq-content pl-70" data-aos="fade-left" data-aos-delay="700">
              <div className="azzle-section-title max-width-500">
                <h2>You have questions?</h2>
              </div>
              <p>We believe in accessible and affordable higher education, with end-to-end services.</p>

              <div className="azzle-faq-contact-wraper">
                <div className="azzle-faq-contact-icon">
                  <img src="assets/images/home1/faq-icon.svg" alt="icon" />
                </div>
                <div className="azzle-faq-contact-content">
                  <h3>Still have questions?</h3>
                  <a href="tel:8801761111456">(880) 176 1111 456</a>
                </div>
              </div>
              <div className="azzle-faq-contact-wraper mt-4">
                <div className="azzle-faq-contact-icon">
                  <img src="assets/images/home1/faq-icon2.svg" alt="icon" />
                </div>
                <div className="azzle-faq-contact-content">
                  <h3>Drop us a line</h3>
                  <a href="mailto:support@example.com">support@example.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
