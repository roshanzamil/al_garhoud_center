
import Link from 'next/link';

export default function VideoHomeOne() {
  return (
    <section className="azzle-video-section" style={{backgroundImage: 'url(/assets/images/about/image-3.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
       <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-lg-8">
                <div className="azzle-default-content w-100 light-color p-5" data-aos="fade-up" data-aos-delay="700" style={{background: 'rgba(0,0,0,0.6)', borderRadius: '15px'}}>
              <h2>
                <Link href="/team" style={{color: 'white', textDecoration: 'none'}}>
                "I believe that positive energy and optimism help us to take up any challenge inlife and to succeed in even the most difficult tasks. I also believe that positive energy is contagious: we can transmit it to others"
                </Link>
              </h2>
              <p>- His Highness Sheikh Mohammed bin Rashid Al Maktoum</p>

              <div className="mt-4">
                 <Link href="/team" className="azzle-default-btn">View Team</Link>
              </div>

            </div>
            </div>
        </div>
      </div>
    </section>
  )
}
