
"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ✅ CTA slider items (data-driven)
const ctaItems = [
  "Simplify your visa process",
  "Boost your business setup",
  "Grow with expert guidance",
  "Innovate with seamless services",
  "Deliver on time, every time",
  "Stay ahead of regulations",
];

export default function FooterOne() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clone content for infinite scroll effect
    const clone = container.innerHTML;
    container.innerHTML += clone;

    let scrollAmount = 0;
    let frameId: number;

    const marqueeScroll = () => {
      if (!isPaused && container) {
        scrollAmount += 2; // speed
        container.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      frameId = requestAnimationFrame(marqueeScroll);
    };

    frameId = requestAnimationFrame(marqueeScroll);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <footer className="azzle-footer-section">
      {/* Shape */}
      <div className="azzle-footer-shape">
        <img src="assets/images/home1/footer-shape.png" alt="shape" />
      </div>

      {/* CTA Slider */}
      <div
        className="azzle-footer-top inner-mwrquee-wra overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="azzle-cta-slider-init flex"
          ref={containerRef}
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {ctaItems.map((title, i) => (
            <div key={i} className="azzle-cta-slider-item flex items-center px-6">
              <img src="assets/images/home1/star.svg" alt="Icon" />
              <div className="azzle-cta-slider-title">{title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className="container">
        <div className="azzle-footer-one">
          <div className="row">
            
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="azzle-footer-textarea">
                <Link href="/">
                  <img src="assets/images/logo/logo-dark.svg" alt="Logo" style={{ width: '200px' }} />
                </Link>
                <p>
                  Al Garhoud Center is dedicated to providing exceptional government services with a commitment to efficiency, transparency and customer satisfaction, aligning with the vision of Dubai's leadership.
                </p>
                <a href="mailto:info@algarhoudcenter.ae">
                  <span>Email:</span> info@algarhoudcenter.ae
                </a>
              </div>
            </div>

            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="azzle-footer-menu pl-30">
                <h4>Primary Pages</h4>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/service">Services</Link></li>
                  <li><Link href="/contact-us">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="azzle-footer-menu pl-70">
                <h4>More Links</h4>
                <ul>
                  <li><Link href="/team">Leadership</Link></li>
                  <li><Link href="/milestones">Milestones</Link></li>
                  <li><Link href="/gallery">Gallery</Link></li>
                  <li><Link href="/downloads">Downloads</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="azzle-footer-menu mb-0">
                <h4>Subscribe our newsletter</h4>
                <div className="azzle-subscribe-field">
                  <input type="email" placeholder="Enter your email" />
                  <button className="sub-btn" type="submit">
                    <img src="assets/images/home1/arrow-white.svg" alt="Icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="azzle-footer-bottom-text">
          <p>
            © Copyright 2026, All Rights Reserved by
            Al Garhoud Center
          </p>
          <p>
            Designed and Developed by <a href="https://brocrypt.com/" target="_blank" rel="noopener noreferrer">BroCrypt</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
