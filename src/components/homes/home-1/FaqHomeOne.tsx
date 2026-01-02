"use client";
import { useState } from "react";
import { Accordion } from "react-accessible-accordion";
import AccordionItem from "@/common/AccordionItem";

export default function FaqHomeOne() {
  const [allowMultipleExpanded, setAllowMultipleExpanded] = useState(true);

  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="azzle-faq-wraper" data-aos="fade-right" data-aos-delay="500">
              <Accordion
                allowMultipleExpanded={allowMultipleExpanded}
                preExpanded={["a"]}
              >
                <AccordionItem
                  id="a"
                  title="Can I pay for my studies in installments?"
                >
                  Yes, you can typically arrange to pay your tuition fees in
                  installments.
                </AccordionItem>
                <AccordionItem
                  id="b"
                  title="How do I find out about scholarships?"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </AccordionItem>
                <AccordionItem
                  id="c"
                  title="How do I apply for a scholarship?"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
                <AccordionItem
                  id="d"
                  title="What courses are available?"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </AccordionItem>
                <AccordionItem
                  id="e"
                  title="How do I know if I meet the entry requirements?"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </AccordionItem>
              </Accordion>
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
