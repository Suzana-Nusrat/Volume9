import docsRacks from './assets/docs-racks.png'
import docsBuilding from './assets/docs-building.png'

function Docs() {
  return (
    <main className="docs-page">
      <section className="docs-hero">
        <div className="docs-hero-inner">
          <div className="docs-copy">
            <p className="docs-eyebrow">Core Origin: Bangladesh, BD</p>
            <h1>
              Architecting
              <br />
              <span className="docs-title-line">The <span>Future.</span></span>
            </h1>
            <p>
              Born in the heart of Dhaka, scaling across global networks.
              VOLUME 9 is an enterprise-grade technical powerhouse dedicated to
              high-performance operational systems.
            </p>
          </div>

          <figure className="docs-location-card">
            <img src={docsBuilding} alt="Volume 9 terminal location building" />
            <figcaption>
              <div>
                <span>Terminal Location</span>
                <strong>23.8103° N, 90.4125° E</strong>
              </div>
              <button type="button" aria-label="View network location">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="5" cy="7" r="1.6" stroke="currentColor" strokeWidth="2" />
                  <circle cx="19" cy="7" r="1.6" stroke="currentColor" strokeWidth="2" />
                  <circle cx="5" cy="17" r="1.6" stroke="currentColor" strokeWidth="2" />
                  <circle cx="19" cy="17" r="1.6" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 8.4 10.2 11M16.9 8.4 13.8 11M7 15.6 10.2 13M16.9 15.6 13.8 13" stroke="currentColor" strokeWidth="2" />
                </svg>
              </button>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="docs-infrastructure">
        <div className="docs-infrastructure-inner">
          <div className="docs-infrastructure-head">
            <div>
              <p className="docs-infra-kicker">Global Infrastructure</p>
              <h2>Technical Precision.<br />Global Scalability.</h2>
            </div>
            <p className="docs-system-status">System Status: <span /> Nominal</p>
          </div>

          <div className="docs-infra-grid">
            <article>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.18" />
                <path d="M12 3a9 9 0 0 0-8.6 11.6h5.1V10h3.7V6.6h3.4A9 9 0 0 0 12 3Z" fill="currentColor" />
                <path d="M20.6 9.8h-5v4h-3.8v6.1A9 9 0 0 0 20.6 9.8Z" fill="currentColor" />
              </svg>
              <h3>40+ Countries Integrated</h3>
              <p>
                Deploying core engine assets across diverse geopolitical
                infrastructures with zero latency.
              </p>
            </article>

            <article>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M13.8 2.5 5.5 13h5.2l-1.8 8.5L18.7 9.2h-5.4l.5-6.7Z" fill="currentColor" />
              </svg>
              <h3>Core Engine V4.2</h3>
              <p>
                Optimized for high-concurrency environments and critical data
                processing at enterprise scale.
              </p>
            </article>
          </div>

          <div className="docs-origin-grid">
            <article className="docs-dhaka-card">
              <h3>Born in<br />Dhaka</h3>
              <p>
                Leveraging the raw energy and technical talent of Bangladesh's
                digital frontier.
              </p>
            </article>

            <article className="docs-uptime-card">
              <img src={docsRacks} alt="" aria-hidden="true" />
              <div>
                <h3>99.9% Uptime</h3>
                <p>
                  Guaranteed system reliability through redundant fail-safes and
                  decentralized protocols.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="docs-contact">
        <div className="docs-contact-inner">
          <div className="docs-contact-info">
            <p className="docs-contact-kicker">Direct Access</p>
            <h2>Initiate<br />Contact.</h2>

            <div className="docs-contact-list">
              <article>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="2" />
                    <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <div>
                  <p>Secure Channel</p>
                  <strong>operations@volume9.com</strong>
                </div>
              </article>
              <article>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 21s6-5.1 6-11a6 6 0 0 0-12 0c0 5.9 6 11 6 11Z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <div>
                  <p>Main Terminal</p>
                  <strong>Gulshan 1, Dhaka 1212</strong>
                </div>
              </article>
              <article>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="6" width="16" height="12" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 15h4M8 11h2M14 11h2l-2 3h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p>System Version</p>
                  <strong>V4.2.0-STABLE</strong>
                </div>
              </article>
            </div>
          </div>

          <form className="docs-transmission-form">
            <div className="docs-form-row">
              <label>
                <span>Identity / Name</span>
                <input type="text" placeholder="Operator Name" />
              </label>
              <label>
                <span>Digital Address</span>
                <input type="email" placeholder="Email@domain.com" />
              </label>
            </div>

            <label>
              <span>Operation Subject</span>
              <input type="text" placeholder="General Inquiry" />
            </label>

            <label>
              <span>Encrypted Message</span>
              <textarea placeholder="Enter transmission data..." />
            </label>

            <button type="button">Transmit Signal ▷</button>
            <p>By transmitting, you agree to our core data protocols and security manifesto.</p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Docs
