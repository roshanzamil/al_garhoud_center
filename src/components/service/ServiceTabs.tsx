
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';

const serviceData = [
  {
    id: 1,
    key: "dha",
    title: "Dubai Health - DHA",
    content: "Our expert team handles all your DHA-related needs, including medical fitness test applications, typing services, and securing necessary approvals. We ensure a seamless and efficient process, so you can meet your health requirements for residency and employment in Dubai without any hassle.",
    image: "/assets/images/service/DHA-logo.webp",
  },
  {
    id: 2,
    key: "typing",
    title: "Typing Services",
    content: "We provide comprehensive and accurate typing services for a wide range of documents. From visa applications and labor contracts to legal notices and official forms, our professional typists ensure precision and compliance with all government standards, saving you time and preventing errors.",
    image: "/assets/images/service/typing-logo.webp",
  },
  {
    id: 3,
    key: "amer",
    title: "Amer",
    content: "Navigate the Amer system with ease. Our center offers a complete suite of Amer services, including new visa applications, residency renewals, cancellations, and modifications. We act as your single point of contact to manage all your GDRFA-related transactions efficiently.",
    image: "/assets/images/service/amer-logo.webp",
  },
  {
    id: 4,
    key: "det",
    title: "DET",
    content: "Streamline your business setup and licensing with our expert DET (Department of Economy and Tourism) services. We assist with new business license applications, annual renewals, and any modifications, ensuring your company remains compliant with Dubai's commercial regulations.",
    image: "/assets/images/service/det-logo.webp",
  },
  {
    id: 5,
    key: "tawjeeh",
    title: "Taw-Jeeh Services",
    content: "Al Garhoud Center is your trusted partner for all Taw-Jeeh services. We handle everything related to the Ministry of Labour, including contract processing, orientation, and awareness programs, ensuring both employers and employees understand their rights and responsibilities.",
    image: "/assets/images/service/t3-logo.webp",
  },
  {
    id: 6,
    key: "notary",
    title: "Notary Public",
    content: "Access certified notary public services with convenience at our center. We assist in booking legal appointments, attesting documents, and obtaining government-certified true copies for all your official and personal needs, providing a reliable and professional experience.",
    image: "/assets/images/service/dubai-courts-logo.webp",
  },
];

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabKey = searchParams.get('tab');
    if (tabKey) {
      const service = serviceData.find(s => s.key === tabKey);
      if (service) {
        setActiveTab(service.id);
      }
    }
  }, [searchParams]);

  const activeService = serviceData.find((service) => service.id === activeTab);

  return (
    <section className="azzle-section-padding pt-0">
      <div className="container">
        <div className="service-tabs-container" data-aos="fade-up" data-aos-delay="700">
          <div className="service-tabs-nav">
            {serviceData.map((service) => (
              <button
                key={service.id}
                className={`service-tab-item ${activeTab === service.id ? "active" : ""}`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>
          <div className="service-tabs-content">
            {activeService && (
              <>
                <div className="service-content-image">
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    width={150}
                    height={150}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h3>{activeService.title}</h3>
                <p>{activeService.content}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
