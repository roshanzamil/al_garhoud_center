

export default function ContactArea({ dictionary }: { dictionary: any }) {
  return (
    <div className="azzle-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="azzle-default-content pr70" data-aos="fade-up" data-aos-delay="700">
              <h2>{dictionary.title}</h2>
              <p className="mb-0">{dictionary.desc}</p>
              <div className="mt-50">
                <div className="azzle-contact-info-wrap">
                  <div className="azzle-contact-info-item">
                    <h5>{dictionary.email_label}</h5>
                    <a href="mailto:info@algarhoudcenter.ae">info@algarhoudcenter.ae</a>
                  </div>
                  <div className="azzle-contact-info-item">
                    <h5>{dictionary.phone_label}</h5>
                    <a href="tel:043991744">04 399 1744</a>
                  </div>
                  <div className="azzle-contact-info-item">
                    <h5>{dictionary.follow_label}</h5>
                    <div className="azzle-social-wrap2 social-hover-orange">
                      <ul>
                        <li>
                          <a href="https://www.facebook.com">
                            <img src="/assets/images/home2/facebook.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com">
                            <img src="/assets/images/home2/twitter.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com">
                            <img src="/assets/images/home2/insta.svg" alt="Icon" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com">
                            <img src="/assets/images/home2/in.svg" alt="Icon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="azzle-contact-box" data-aos="fade-up" data-aos-delay="900">
              <form action="#">
                <div className="azzle-contact-column">
                  <div className="azzle-contact-field">
                    <label>{dictionary.form.name_label}</label>
                    <input type="text" placeholder={dictionary.form.name_placeholder} />
                  </div>
                  <div className="azzle-contact-field">
                    <label>{dictionary.form.email_label}</label>
                    <input type="email" placeholder={dictionary.form.email_placeholder} />
                  </div>
                </div>
                <div className="azzle-contact-column">
                  <div className="azzle-contact-field">
                    <label>{dictionary.form.phone_label}</label>
                    <input type="number" placeholder={dictionary.form.phone_placeholder} />
                  </div>
                  <div className="azzle-contact-field">
                    <label>{dictionary.form.company_label}</label>
                    <input type="text" placeholder={dictionary.form.company_placeholder} />
                  </div>
                </div>
                <div className="azzle-contact-field">
                  <label>{dictionary.form.message_label}</label>
                  <textarea name="message" placeholder={dictionary.form.message_placeholder}></textarea>
                </div>
                <button id="azzle-main-submit-btn" type="button">{dictionary.form.cta}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
