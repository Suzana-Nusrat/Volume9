import securityChip from './assets/security-chip.png'
import securityMesh from './assets/security-mesh.png'
import securityHero from './assets/security-hero.png'

function Security() {
  return (
    <main className="security-page">
      <section className="security-hero">
        <img src={securityHero} alt="" className="security-hero-image" aria-hidden="true" />
        <div className="security-hero-overlay" />

        <div className="security-hero-inner">
          <p className="security-eyebrow">Precision Systems Architecture</p>
          <div className="security-hero-grid">
            <div className="security-copy">
              <h1>The Crimson<br />Engine</h1>
              <p>
                Deploying enterprise-grade reliability at global scale. Our niche
                vertical solutions redefine technical performance through
                aggressive precision and obsidian-grade security.
              </p>
            </div>

            <div className="security-metrics" aria-label="Security performance metrics">
              <div>
                <strong>99.999%</strong>
                <span>Uptime SLA</span>
              </div>
              <div>
                <strong>2.4ms</strong>
                <span>Avg Latency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="security-suite">
        <div className="security-suite-inner">
          <div className="security-suite-grid">
            <article className="security-analytics-card">
              <div className="security-analytics-content">
                <h2>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 16v-4M12 16V8M16 16v-7" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Advanced Data Analytics
                </h2>
                <p>
                  Transforming raw telemetry into actionable industrial
                  intelligence. Our proprietary engine processes petabytes in
                  sub-second intervals using neural-linked analytical models.
                </p>
                <div className="security-analytics-stats">
                  <div>
                    <span>Throughput</span>
                    <strong>12.4 PB/day</strong>
                  </div>
                  <div>
                    <span>Model Accuracy</span>
                    <strong>99.98%</strong>
                  </div>
                </div>
                <a href="#">Explore Engine</a>
              </div>
              <img src={securityMesh} alt="" aria-hidden="true" />
            </article>

            <aside className="security-product-card">
              <div className="security-product-top">
                <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <path d="M16 5a11 11 0 1 0 7.8 18.8" stroke="currentColor" strokeWidth="2.6" />
                  <path d="M16 10v6l4 3" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M23 5l4 4M27 5l-4 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
                <span>Niche Sector Alpha</span>
              </div>
              <h2>Amar Trip</h2>
              <p>
                The enterprise standard for logistics and transit
                synchronization. Real-time fleet management optimized for the
                most demanding urban environments.
              </p>
              <ul>
                <li>Dynamic Routing</li>
                <li>Multi-modal Sync</li>
                <li>Fleet Telemetry</li>
              </ul>
              <button type="button">Launch Terminal</button>
            </aside>
          </div>

          <div className="security-feature-grid">
            <article>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3.5 17 5.4v4.1c0 3.5-1.8 6.6-5 8.1-3.2-1.5-5-4.6-5-8.1V5.4l5-1.9Z" fill="currentColor" />
                <path d="M12 5.7v9.4c1.9-1.1 3-2.9 3.1-5.3V6.9L12 5.7Z" fill="#ffffff" />
              </svg>
              <h3>Zero-Trust Operations</h3>
              <p>Hardened infrastructure protocols for mission-critical enterprise assets.</p>
            </article>
            <article>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="5" cy="7" r="1.6" stroke="currentColor" strokeWidth="2" />
                <circle cx="19" cy="7" r="1.6" stroke="currentColor" strokeWidth="2" />
                <circle cx="5" cy="17" r="1.6" stroke="currentColor" strokeWidth="2" />
                <circle cx="19" cy="17" r="1.6" stroke="currentColor" strokeWidth="2" />
                <path d="M7 8.4 10.2 11M16.9 8.4 13.8 11M7 15.6 10.2 13M16.9 15.6 13.8 13" stroke="currentColor" strokeWidth="2" />
              </svg>
              <h3>Neural Network Mesh</h3>
              <p>Decentralized node structure ensuring zero single points of failure.</p>
            </article>
            <article>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 18h16M6 15l4-4 3 3 5-7" stroke="currentColor" strokeWidth="2" />
                <path d="M18 7h-4M18 7v4" stroke="currentColor" strokeWidth="2" />
              </svg>
              <h3>Precision Monitoring</h3>
              <p>Real-time health diagnostics with AI-driven predictive maintenance.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="security-engineering">
        <div className="security-engineering-inner">
          <img src={securityChip} alt="Microchip on circuit board" />
          <div className="security-engineering-copy">
            <p className="security-section-kicker">Volume 9 Engineering</p>
            <h2>Built for the<br /><span>1% Latency</span></h2>
            <p>
              We don't design for the average use case. Volume 9 products are
              engineered for the edge-where milliseconds dictate market
              movements and reliability is the only currency that matters.
            </p>

            <div className="security-process-list">
              <article>
                <strong>01</strong>
                <div>
                  <h3>Atomic Execution</h3>
                  <p>All operations are processed in isolated transactional containers to ensure data integrity.</p>
                </div>
              </article>
              <article>
                <strong>02</strong>
                <div>
                  <h3>Quantum Security</h3>
                  <p>Post-quantum cryptographic layers protecting every packet across our global mesh network.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="security-final-cta">
        <h2>Ready for the Next<br /><span>Phase?</span></h2>
        <div className="security-final-actions">
          <button type="button" className="security-system-button">Request System Access</button>
          <button type="button" className="security-docs-button">Technical Documentation</button>
        </div>
      </section>
    </main>
  )
}

export default Security
