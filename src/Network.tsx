function Network() {
  return (
    <main className="network-page">
      <section className="network-hero">
        <div className="network-hero-glow" />

        <div className="network-hero-inner">
          <div className="network-copy">
            <p className="network-eyebrow">
              Engineered for latency zero
            </p>

            <h1 className="network-title">
              Precision
              <br />
              <span>Intelligence<span className="network-period" aria-hidden="true" /></span>
            </h1>

            <div className="network-lower">
              <p className="network-description">
                Real-time AI orchestration powered by Scala streams and Akka
                clusters. Deploy Kubernetes-native cognitive workloads at scale
                across high-stakes industrial networks.
              </p>

              <div className="network-code-card">
                <div className="network-code-heading">
                  <span className="network-code-icon" aria-hidden="true">
                    <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.5" y="2.5" width="15" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M5 7l2.6 2L5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 11h3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>
                    Core Engine V9.4
                  </span>
                </div>

                <div className="network-code-lines" aria-label="Core engine stream code">
                  <span>def stream = AkkaSource(kafka)</span>
                  <span className="network-code-salmon">.via(AIInferenceFlow(model))</span>
                  <span>.to(KubernetesSink(podCluster))</span>
                  <span>.run()</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="network-capabilities" aria-label="Network capabilities">
        <div className="network-capabilities-grid">
          <article className="network-feature-card network-feature-ai">
            <p className="network-feature-kicker">01 / Intelligence</p>
            <h2>Specialized AI Systems</h2>
            <p>
              Proprietary LLM tuning for high-frequency trading and industrial
              telemetry. No hallucinations, only deterministic output.
            </p>
            <div className="network-brain-mark" aria-hidden="true">
              <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72 128V36c0-15-11-27-26-27-13 0-24 9-26 22-12 2-21 13-21 26 0 8 3 16 9 21-3 5-5 11-5 18 0 17 14 31 31 31" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M70 38c-13 0-24 10-24 24 0 10 6 19 15 22" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M8 78c8 9 19 13 31 12" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M88 128V36c0-15 11-27 26-27 13 0 24 9 26 22 12 2 21 13 21 26 0 8-3 16-9 21 3 5 5 11 5 18 0 17-14 31-31 31" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M90 38c13 0 24 10 24 24 0 10-6 19-15 22" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                <path d="M152 78c-8 9-19 13-31 12" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
              </svg>
            </div>
          </article>

          <article className="network-feature-card network-feature-streams">
            <p className="network-feature-kicker">02 / Architecture</p>
            <h2>Reactive Data Streams</h2>
            <p>
              Building on the JVM with Scala and Akka to handle millions of
              events per second with backpressure-aware reliability.
            </p>
            <div className="network-tags" aria-label="Technologies">
              <span>Scala 3.x</span>
              <span>Akka Streams</span>
              <span>Kafka</span>
            </div>
          </article>

          <article className="network-feature-card network-feature-k8s">
            <div className="network-server-visual" aria-hidden="true" />
            <div className="network-feature-content">
              <p className="network-feature-kicker">03 / Orchestration</p>
              <h2>K8S Native</h2>
              <p>
                Seamless scaling from edge nodes to hyperscale cloud providers
                with zero-downtime deployments.
              </p>
            </div>
          </article>

          <article className="network-feature-card network-feature-critical">
            <p className="network-feature-kicker">04 / Mission Critical</p>
            <h2>For industries that cannot fail.</h2>
            <div className="network-critical-tags" aria-label="Industries">
              <span>
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2.4 14 4.2v4.4c0 3.2-1.9 5.7-5 6.9-3.1-1.2-5-3.7-5-6.9V4.2L9 2.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M9.6 4.6 12.3 5.6v3.1H9.6V4.6ZM8.4 13.1c-1.2-.7-2-1.8-2.4-3h2.4v3Z" fill="currentColor" />
                  <path d="M9 4.4v9M5.8 9.4h6.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Cyber-defense
              </span>
              <span>
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.5" y="5" width="13" height="8" rx="4" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M9 6.7v4.6M10.5 7.8c-.5-.4-1.4-.6-2-.3-.7.3-.7 1.2 0 1.5l1 .3c.8.3.8 1.2.1 1.5-.7.3-1.6.1-2.1-.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Algorithmic finance
              </span>
              <span>
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.2 15.2h5.5M4.5 15.2V8.7M4.5 8.7l3.7-3.4 4.1 2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.2 5.3 6.6 9.2M8.2 5.3l1.4-2.1M12.3 7.4l2.2-1.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14.5 6.3v2.9M13.3 10.3l1.2-1.1 1.2 1.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4.5" cy="8.7" r="1.2" fill="currentColor" />
                  <circle cx="8.2" cy="5.3" r="1.2" fill="currentColor" />
                </svg>
                Smart grid
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="network-telemetry" aria-label="System telemetry">
        <div className="network-telemetry-window">
          <div className="network-window-bar">
            <div className="network-window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>v9_system_monitor :: active</span>
          </div>

          <div className="network-telemetry-grid">
            <div className="network-metrics-panel">
              <h2>System Telemetry</h2>

              <div className="network-metric">
                <div>
                  <span>Inference Latency</span>
                  <strong>0.02ms</strong>
                </div>
                <div className="network-meter" aria-hidden="true">
                  <span style={{ width: '80%' }} />
                </div>
              </div>

              <div className="network-metric">
                <div>
                  <span>Cluster Resilience</span>
                  <strong>99.9999%</strong>
                </div>
                <div className="network-meter" aria-hidden="true">
                  <span style={{ width: '100%' }} />
                </div>
              </div>

              <div className="network-metric">
                <div>
                  <span>Throughput</span>
                  <strong>4.2 GB/s</strong>
                </div>
                <div className="network-meter" aria-hidden="true">
                  <span style={{ width: '67%' }} />
                </div>
              </div>
            </div>

            <div className="network-remediation-panel">
              <div className="network-alert">
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 2.8 16 15H2L9 2.8Z" fill="currentColor" />
                  <path d="M9 6.7v3.6M9 12.7h.01" stroke="#4b0d0d" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
                Status glitch detected: optimizing streams
              </div>

              <h2>Autonomous Remediation</h2>
              <p>
                Our Akka-based supervision strategy automatically heals cluster
                fractures before they impact operations.
              </p>
              <a href="#" aria-label="View technical docs">
                View technical docs
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="network-deployment" aria-label="Initiate deployment">
        <div className="network-deployment-panel">
          <h2>Initiate Deployment</h2>
          <p>
            Join the network of elite engineering teams building the future of
            reactive intelligence.
          </p>
          <div className="network-deployment-actions">
            <button type="button" className="network-launch-button">
              Launch Terminal
            </button>
            <button type="button" className="network-consult-button">
              Consult Expert
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Network;
