"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gallery_data from "@/data/gallery-data";

export default function GalleryArea() {
  const [index, setIndex] = useState(-1);

  const slides = gallery_data.map(item => ({
    src: item.src,
    width: 1200,
    height: 800,
  }));

  return (
    <>
      <section className="azzle-section-padding">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery_data.map((item, i) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setIndex(i)}
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}
