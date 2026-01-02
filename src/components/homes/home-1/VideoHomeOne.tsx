import ModalVideo from "@/modal/modalVideo";


export default function VideoHomeOne() {
  return (
    <section className="azzle-video-section azzle-section-padding-bottom">
      <div className="row">
        <div className="col-xl-6">
          <div className="azzle-video-thumb">
            <img src="assets/images/home1/thumb3.png" alt="Thumb" />
            <ModalVideo>
              <a className="azzle-popup-video video-init" href="https://www.youtube.com/watch?v=zE_WFiHnSlY">
                <img src="assets/images/home1/play-btn.png" alt="" />
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </a>

            </ModalVideo>
          </div>
        </div>
        <div className="col-xl-6 d-flex align-items-center">
          <div className="azzle-video-wrap" data-aos="fade-up" data-aos-delay="500">
            <div className="azzle-video-content">
              <h2>Streamlining Your Government Transactions</h2>
              <p>As the city grows, so do your needs. We continuously adapt to offer the most current and efficient services, ensuring that your official requirements are met with unparalleled professionalism and speed.</p>
              <div className="divider2"></div>
              <div className="azzle-counter-wrap">
                <div className="azzle-counter-item">
                  <h2 className="azzle-counter-data" aria-label="18y">18y</h2>
                  <p>Innovative services</p>
                </div>
                <div className="azzle-counter-item">
                  <h2 className="azzle-counter-data" aria-label="70+">70+</h2>
                  <p>Dedicated Workforce</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
