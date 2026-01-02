import Link from "next/link";



export default function FeaturesHomeOne() {
  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title max-width-780" data-aos="fade-left" data-aos-delay="500">
          <h2>Our Services</h2>
        </div>
        <div className="azzle-iconbox-wrapper" data-aos="fade-up" data-aos-delay="700">
          <div className="azzle-iconbox-column">
            <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
              </div>
              <div className="azzle-iconbox-content">
                <h3>Dubai Health - DHA</h3>
                <p>Get your medical fitness typing and approvals seamlessly.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/single-service">View Services</Link>
              </div>
            </div>
             <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v5"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M2 15h10"/><path d="m5 12-3 3 3 3"/></svg>
              </div>
              <div className="azzle-iconbox-content">
                <h3>Typing Services</h3>
                <p>Accurate typing for visa, labor, legal documents and much more.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/single-service">View Services</Link>
              </div>
            </div>
             <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="azzle-iconbox-content">
                <h3>Amer</h3>
                <p>Complete Amer services under one roof. Visa renewal, cancellation & more.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/single-service">View Services</Link>
              </div>
            </div>
            <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10.1V16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.9M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 22V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14Z"/></svg>
              </div>
              <div className="azzle-iconbox-content">
                <h3>DET</h3>
                <p>Business license applications, renewals & modifications.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/single-service">View Services</Link>
              </div>
            </div>
             <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 13-2 2 2 2"/><path d="m14 13 2 2-2 2"/></svg>
              </div>
              <div className="azzle-iconbox-content">
                <h3>Attestation</h3>
                <p>MOFA, embassy & notary attestation for personal/ business docs.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/single-service">View Services</Link>
              </div>
            </div>
            <div className="azzle-iconbox-wrap">
              <div className="azzle-iconbox-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="azzle-iconbox-content">
                <h3>Taw-Jeeh Services</h3>
                <p>All Ministry of Labour services handled professionally.</p>
              </div>
              <div className="azzle-iconbox-button mt-50">
                <Link href="/single-service">View Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
