"use client";
import Link from "next/link";
import { useState } from "react";

export default function PricingHomeOne() { 
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
          <h2>News & Blogs</h2>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="azzle-blog-wrap" data-aos="fade-up" data-aos-delay="500">
              <div className="azzle-blog-thumb">
                <img src="assets/images/blog/blog1.png" alt="thumb" />
              </div>
              <div className="azzle-blog-content">
                <div className="azzle-blog-meta">
                  <ul>
                    <li><a href="#">Amer</a></li>
                    <li>August 13, 2024</li>
                  </ul>
                </div>
                <Link href="/single-blog">
                  <h3>We are proud to inaugurate the DET services of Al Garhoud Center</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="azzle-blog-wrap" data-aos="fade-up" data-aos-delay="700">
              <div className="azzle-blog-thumb">
                <img src="assets/images/blog/blog2.png" alt="thumb" />
              </div>
              <div className="azzle-blog-content">
                <div className="azzle-blog-meta">
                   <ul>
                    <li><a href="#">Amer</a></li>
                    <li>August 13, 2025</li>
                  </ul>
                </div>
                <Link href="/single-blog">
                  <h3>Your Emirates ID is More Than Just a Card – It’s Your Lifeline in the UAE</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="azzle-blog-wrap" data-aos="fade-up" data-aos-delay="900">
              <div className="azzle-blog-thumb">
                <img src="assets/images/blog/blog3.png" alt="thumb" />
              </div>
              <div className="azzle-blog-content">
                 <div className="azzle-blog-meta">
                   <ul>
                    <li><a href="#">Amer</a></li>
                    <li>August 13, 2025</li>
                  </ul>
                </div>
                <Link href="/single-blog">
                  <h3>Al Garhoud Center Expands to Dubai Airport: A New Chapter Begins</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
         <div className="text-center mt-5">
            <Link href="/blog" className="azzle-default-btn">View All</Link>
        </div>
      </div>
    </div>
  );
}
