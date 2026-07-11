import analyticsBg from './assets/assets-analytics-bg.png'
import logisticsMap from './assets/assets-logistics-map.png'

function Assets() {
  return (
    <main className="assets-page">
      <section className="assets-hero">
        <div className="assets-hero-inner">
          <p className="assets-eyebrow">Enterprise Architecture // Series 9</p>
          <h1>
            Red
            <br />
            <span>Engine</span>
          </h1>
          <div className="assets-hero-copy">
            <p>
              Deploying high-precision logistics and analytical frameworks for
              the next generation of industrial operations. Efficiency is no
              longer optional.
            </p>
          </div>

          <div className="assets-product-grid">
            <article className="assets-trip-card">
              <div className="assets-logistics-word" aria-hidden="true">Logistics</div>
              <div className="assets-trip-content">
                <p className="assets-card-kicker">Primary Product / 01</p>
                <h2>Amart Trip</h2>
                <p>
                  End-to-end logistics orchestration. Real-time fleet
                  synchronization powered by low-latency telemetry and
                  predictive routing algorithms.
                </p>
                <div className="assets-trip-stats">
                  <div>
                    <span>Latency</span>
                    <strong>12ms</strong>
                  </div>
                  <div>
                    <span>Throughput</span>
                    <strong>8.4k/s</strong>
                  </div>
                  <div>
                    <span>Uptime</span>
                    <strong>99.99</strong>
                  </div>
                </div>
                <button type="button">Deploy Logistics Node</button>
              </div>
              <img src={logisticsMap} alt="Global logistics route visualization" />
            </article>

            <aside className="assets-engine-card">
              <div className="assets-feed">
                <p>Live Network Feed</p>
                <dl>
                  <div>
                    <dt>System Core</dt>
                    <dd>Stable</dd>
                  </div>
                  <div>
                    <dt>Terminal Ops</dt>
                    <dd>Encrypted</dd>
                  </div>
                  <div>
                    <dt>Asset Sync</dt>
                    <dd>100%</dd>
                  </div>
                </dl>
              </div>
              <div className="assets-engine-copy">
                <h2>Volume 9<br />Engine</h2>
                <p>Propelling enterprise performance through relentless innovation.</p>
              </div>
            </aside>
          </div>

          <article className="assets-analytics-card">
            <div className="assets-analytics-visual" aria-hidden="true">
              <img className="assets-analytics-bg" src={analyticsBg} alt="" />
              <div className="assets-chart-top">
                <span>Data Stream: [Alpha_9]</span>
                <i />
              </div>
              <div className="assets-chart-bars">
                <span style={{ height: '28%' }} />
                <span style={{ height: '38%' }} />
                <span style={{ height: '27%' }} />
                <span style={{ height: '58%' }} />
                <span style={{ height: '43%' }} />
                <span style={{ height: '18%' }} />
                <span style={{ height: '35%' }} />
                <span style={{ height: '17%' }} />
                <span style={{ height: '54%' }} />
              </div>
            </div>

            <div className="assets-analytics-copy">
              <p className="assets-card-kicker">Secondary Product / 02</p>
              <h2>Advanced Analytics</h2>
              <p>
                Transform raw operational data into actionable intelligence.
                Our neural network engines identify patterns before they become
                bottlenecks.
              </p>
              <ul>
                <li>Predictive Maintenance Modeling</li>
                <li>Anomaly Detection &amp; Alerting</li>
                <li>Cluster Analysis for Scaling</li>
              </ul>
              <a href="#">View Analytical Framework</a>
            </div>
          </article>

          <section className="assets-metrics" aria-label="Asset performance metrics">
            <div>
              <strong>99.9<span>%</span></strong>
              <p>System Reliability</p>
            </div>
            <div>
              <strong>4.2M</strong>
              <p>Packets / Second</p>
            </div>
            <div>
              <strong>180+</strong>
              <p>Global Nodes</p>
            </div>
            <div>
              <strong>0.1ms</strong>
              <p>Decision Latency</p>
            </div>
          </section>

          <section className="assets-interface-cta">
            <h2>Ready to Interface?</h2>
            <p>
              Integrate Volume 9 core modules into your existing stack and
              realize true industrial optimization.
            </p>
            <div className="assets-interface-actions">
              <button type="button" className="assets-request-button">Request Access</button>
              <button type="button" className="assets-docs-button">Documentation</button>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Assets
