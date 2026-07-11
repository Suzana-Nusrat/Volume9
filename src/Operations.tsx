import operationsHero from './assets/operations-hero.png'
import operationsSynaptic from './assets/operations-synaptic.png'

function Operations() {
  return (
    <main className="operations-page">
      <section className="operations-hero">
        <img src={operationsHero} alt="" className="operations-hero-image" aria-hidden="true" />
        <div className="operations-hero-overlay" />

        <div className="operations-hero-inner">
          <p className="operations-eyebrow">Autonomous Global Logistics</p>

          <div className="operations-hero-grid">
            <div className="operations-copy">
              <h1>
                The
                <br />
                <span>Crimson</span>
                <br />
                Engine
              </h1>
              <p>
                Deploying hyper-scale intelligence for the next generation of
                global enterprise. High-performance real-time orchestration at
                the speed of thought.
              </p>

              <div className="operations-actions">
                <button type="button" className="operations-launch-button">
                  Launch Terminal
                </button>
                <button type="button" className="operations-spec-button">
                  Technical Spec
                </button>
              </div>
            </div>

            <aside className="operations-latency-card" aria-label="Active latency">
              <div className="operations-latency-label">
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M10.8 1.9 4.5 9.8h4.1l-1.4 6.3 6.3-8h-4l1.3-6.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                Active Latency
              </div>
              <strong>0.0004<span>ms</span></strong>
              <div className="operations-latency-meter" aria-hidden="true">
                <span />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="enterprise-grid-section">
        <div className="enterprise-grid-inner">
          <p className="enterprise-eyebrow">Architecture</p>
          <h2>Enterprise Grid</h2>

          <div className="enterprise-grid-layout">
            <article className="enterprise-matrix-card">
              <div className="enterprise-matrix-copy">
                <h3>Infrastructure Matrix</h3>
                <p>Decentralized compute clusters optimized for sub-millisecond execution across 42 global regions.</p>
                <svg className="enterprise-server-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="6" stroke="currentColor" strokeWidth="2" />
                  <rect x="3" y="14" width="18" height="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 8h.01M7 17h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="enterprise-matrix-visual" aria-hidden="true" />
            </article>

            <article className="enterprise-security-card">
              <div className="enterprise-security-head">
                <span>Status: Critical</span>
                <svg viewBox="0 0 22 22" aria-hidden="true">
                  <path d="M11 2.8 17 5v4.7c0 3.7-2.2 7-6 8.7-3.8-1.7-6-5-6-8.7V5l6-2.2Z" fill="currentColor" />
                  <path d="M11 5.1v10.3c2.2-1.3 3.5-3.2 3.7-5.7V6.7L11 5.1Z" fill="#ffffff" />
                </svg>
              </div>
              <h3>Security<br />Protocol</h3>
              <p>
                Quantum-resistant encryption layers active
                <br />
                across all transit points.
              </p>
              <strong>Shield Active</strong>
            </article>

            <article className="enterprise-neural-card">
              <svg className="enterprise-brain-icon" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                <path d="M13 5.6c-2.6-3-7.5-1-7.5 3.1-2.4.5-4 2.5-4 5 0 2 .9 3.5 2.3 4.3-.6 3.3 2 6.1 5.2 5.5.7 2.5 4 2.3 4-.4V5.6Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
                <path d="M17 5.6c2.6-3 7.5-1 7.5 3.1 2.4.5 4 2.5 4 5 0 2-.9 3.5-2.3 4.3.6 3.3-2 6.1-5.2 5.5-.7 2.5-4 2.3-4-.4V5.6Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
                <path d="M7.5 11.2h5.5M7.2 17.1h5.8M17 11.2h5.5M17 17.1h5.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <h3>Neural Sync</h3>
              <p>
                Advanced synaptic mapping for predictive resource allocation and
                automated threat neutralisation.
              </p>
            </article>

            <article className="enterprise-feed-card">
              <div className="enterprise-feed-title">
                <span />
                Live Feed / Volume 9 Core
              </div>
              <div className="enterprise-feed-lines" aria-label="Live system feed">
                <span className="feed-salmon-dark">&gt; Initializing neural_uplink... [OK]</span>
                <span className="feed-salmon">&gt; Analyzing global assets transit... 14.2 TB/s</span>
                <span className="feed-salmon">&gt; Security breach detected in Sector 7G... [NEUTRALISED]</span>
                <span className="feed-white">&gt; Core engine operating at 104% efficiency</span>
                <span className="feed-salmon">&gt; Monitoring persistent connections... 4,821,003</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="synaptic-section">
        <div className="synaptic-inner">
          <div className="synaptic-visual">
            <img src={operationsSynaptic} alt="Crimson synaptic command network" />
          </div>

          <div className="synaptic-copy">
            <p className="synaptic-eyebrow">Core Advantage</p>
            <h2>Synaptic<br />Command &<br />Control</h2>
            <p>
              Traditional enterprise software reacts to the past. The Crimson
              Engine predicts the future. By utilizing recursive neural
              networks, we identify market shifts and logistical bottlenecks
              before they manifest in your data.
            </p>

            <div className="synaptic-stats">
              <div>
                <strong>99.999%</strong>
                <span>Uptime SLA</span>
              </div>
              <div>
                <strong>2.5 PB</strong>
                <span>Real-time Throughput</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="operations-terminal-cta">
        <div className="operations-terminal-inner">
          <h2>Enter the <span>Terminal</span></h2>
          <p>Join the elite network of global enterprises operating on the edge of possibility.</p>
          <form className="operations-access-form">
            <label className="sr-only" htmlFor="enterprise-email">Enterprise email</label>
            <input id="enterprise-email" type="email" placeholder="Enterprise Email" />
            <button type="button">Request Access</button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Operations
