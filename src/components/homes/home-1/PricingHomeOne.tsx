
"use client";
import Link from "next/link";
import { useState } from "react";

export default function PricingHomeOne() {
  return (
    <div className="position-r">
      <div className="azzle-pricing-shape">
        <img src="assets/images/home1/pricing-shape.png" alt="bg" />
      </div>
      <div className="container">
        <div
          className="azzle-section-title center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2>
            Smart Government Solutions, Connecting People
          </h2>
        </div>

        <div className="card-grid-container">
          {/* Vision */}
          <div className="card-grid-item" data-aos="fade-up" data-aos-delay="500">
            <div className="azzle-pricing-wrap">
              <div className="azzle-pricing-header">
                <h4>Our Vision</h4>
              </div>
              <div className="azzle-pricing-body">
                <p>
                  To deliver transparent, efficient and citizen – centric
                  services that uphold the highest standards of integrity,
                  accountability and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="card-grid-item" data-aos="fade-up" data-aos-delay="700">
            <div className="azzle-pricing-wrap active">
              <div className="azzle-pricing-header">
                <h4>Our Mission</h4>
              </div>
              <div className="azzle-pricing-body">
                <p>
                  To be the most unabridged Government service – providing
                  centers in the United Arab Emirates to be aligned with the
                  vision of our leadership.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="card-grid-item" data-aos="fade-up" data-aos-delay="900">
            <div className="azzle-pricing-wrap">
              <div className="azzle-pricing-header">
                <h4>Our Values</h4>
              </div>
              <div className="azzle-pricing-body">
                <ul>
                  <li>Honest</li>
                  <li>Synergistic</li>
                  <li>Honorable</li>
                  <li>Customer-centric</li>
                  <li>Ethical</li>
                  <li>Transparent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
