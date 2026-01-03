"use client";

import { FileDown } from "lucide-react";
import downloads_data from "@/data/downloads-data";

export default function DownloadsArea() {
  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
          <h2>Downloads</h2>
          <p>Access our official documents and resources. Download the materials you need to learn more about our services and company profile.</p>
        </div>
        <div className="downloads-grid-container">
          {downloads_data.map((item, i) => (
            <div
              key={item.id}
              className="download-card"
              data-aos="fade-up"
              data-aos-delay={300 + i * 200}
            >
              <div className="download-card-icon">
                <FileDown size={48} strokeWidth={1.5} />
              </div>
              <div className="download-card-content">
                <h3 className="download-card-title">{item.title}</h3>
                <p className="download-card-description">{item.description}</p>
              </div>
              <a href={item.url} download className="download-card-button">
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
