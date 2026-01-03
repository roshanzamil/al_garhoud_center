import Link from "next/link";



export default function TeamHomeThree() {
  return (
    <section className="azzle-section-padding2 bg-color pt-130">
      <div className="container">
        <div className="azzle-section-title title3 center max-w-1000" data-aos="fade-up" data-aos-delay="500">
          <h2>Our professionals help you</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap" data-aos="fade-up" data-aos-delay="500">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team1.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Mr. Abraham Maslo</h3>
                </div>
              

              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>Chief AI Officer</p>
                </div>
                 
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap" data-aos="fade-up" data-aos-delay="700">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team2.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Willium Robert</h3>
                </div>
              

              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>Data Engineer</p>
                </div>
                 
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="azzle-team-wrap" data-aos="fade-up" data-aos-delay="900">
              
                <div className="azzle-team-thumb">
                  <img src="assets/images/team/team3.png" alt="Thumb" />
                </div>
                <div className="azzle-team-content">
                  <h3>Henry Fayol</h3>
                </div>
              

              <div className="azzle-team-author-wrap">
                <div className="azzle-team-author-data">
                  <p>Research Scientist</p>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
