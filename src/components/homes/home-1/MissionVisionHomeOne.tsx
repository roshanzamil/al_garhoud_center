"use client";
import Link from "next/link";
import { useState } from "react";

export default function MissionVisionHomeOne() {
  return (
    <div className="azzle-section-padding2 position-r">
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
            Connecting People to Possibilities through Smart Government
            Solutions
          </h2>
        </div>

        <div className="row equal-height-row">
          {/* Vision */}
          <div className="col-xl-4 col-md-6 mb-4">
            <div
              className="azzle-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="500"
            >
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
          <div className="col-xl-4 col-md-6 mb-4">
            <div
              className="azzle-pricing-wrap active"
              data-aos="fade-up"
              data-aos-delay="700"
            >
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
          <div className="col-xl-4 col-md-6 mb-4">
            <div
              className="azzle-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="900"
            >
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
