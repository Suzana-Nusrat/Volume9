import chipImage from './assets/terminal-chip.png'

function Terminal() {
  return (
    <main className="terminal-page">
      <section className="terminal-hero">
        <div className="terminal-hero-glow" />

        <div className="terminal-hero-inner">
          <p className="terminal-eyebrow">System core: Engine V4.2</p>

          <h1 className="terminal-title">
            Real-time
            <br />
            <span>Intelligence</span>
          </h1>

          <div className="terminal-body">
            <div className="terminal-copy">
              <p>
                Deep dive into the asynchronous backbone of Volume 9.
                Architecting high-performance Scala streams, resilient Akka
                clusters, and cloud-native Kubernetes orchestration.
              </p>

              <div className="terminal-stats" aria-label="Realtime metrics">
                <div>
                  <strong>4.2M</strong>
                  <span>Ops/sec</span>
                </div>
                <div>
                  <strong>0.4ms</strong>
                  <span>Latency</span>
                </div>
              </div>
            </div>

            <aside className="terminal-code-card" aria-label="Stream thread code">
              <div className="terminal-code-head">
                <span>Stream_thread_01</span>
                <strong>Active</strong>
              </div>
              <div className="terminal-code-lines">
                <span className="terminal-code-salmon">Source(1 to 1000)</span>
                <span>  .map(x =&gt; x * 2)</span>
                <span>  .filter(_ &gt; 100)</span>
                <span>  .runWith(Sink.ignore)</span>
                <span />
                <span>// Status: Awaiting Backpressure</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="terminal-components" aria-label="Technical foundations">
        <div className="terminal-components-inner">
          <p className="terminal-section-kicker">Technical Foundations</p>
          <h2>System Components</h2>

          <div className="terminal-component-grid">
            <article className="terminal-component-card terminal-scala-card">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6c3.6-2 6.4 2 10 0s5.4-2 8 0M3 11c3.6-2 6.4 2 10 0s5.4-2 8 0M3 16c3.6-2 6.4 2 10 0s5.4-2 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3>Scala Streams</h3>
              <p>
                Reactive streams with built-in backpressure. Handling massive
                datasets with linear scalability and type-safe functional
                operators.
              </p>
              <div className="terminal-card-watermark" aria-hidden="true">SL</div>
              <div className="terminal-component-progress" aria-hidden="true">
                <span />
              </div>
            </article>

            <article className="terminal-component-card">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6v4M14 12h4M12 14v4M6 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3>Akka Clusters</h3>
              <p>
                Distributed actor-based concurrency. Self-healing node clusters
                that manage state across global infrastructure.
              </p>
            </article>

            <article className="terminal-component-card">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h5v5h-5z" stroke="currentColor" strokeWidth="2" />
              </svg>
              <h3>Kubernetes</h3>
              <p>
                Cloud-native deployment pipelines. Horizontal pod autoscaling
                optimized for high-throughput JVM workloads.
              </p>
            </article>
          </div>

          <article className="terminal-ingestion">
            <div className="terminal-ingestion-copy">
              <p className="terminal-section-kicker">Live Telemetry</p>
              <h3>Data Ingestion Rate</h3>
              <p>
                Real-time monitoring of ingress points across the global
                network. Spikes in red indicate saturation points requiring
                immediate cluster re-balancing.
              </p>
              <a href="#" aria-label="Detailed metrics">Detailed metrics <span aria-hidden="true">&rarr;</span></a>
            </div>

            <div className="terminal-chart" aria-label="Data ingestion rate chart">
              <svg viewBox="0 0 540 180" preserveAspectRatio="none" aria-hidden="true">
                <polyline points="8,122 40,115 72,128 104,110 136,104 168,119 200,88 232,82 264,102 296,109 328,48 360,62 392,104 424,118 456,110 488,58 520,36 540,70" fill="none" stroke="#ffaaa6" strokeWidth="3" />
                <circle cx="328" cy="48" r="4" fill="#ef3d3e" />
                <circle cx="520" cy="36" r="4" fill="#ef3d3e" />
              </svg>
              <div className="terminal-chart-badge">
                <span />
                Critical load reached
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="terminal-orchestration" aria-label="Adaptive orchestration">
        <div className="terminal-orchestration-inner">
          <div className="terminal-chip-frame">
            <img src={chipImage} alt="Macro view of an AI processor chip on a circuit board" />
          </div>

          <div className="terminal-orchestration-copy">
            <h2>
              <span>Adaptive</span>
              Orchestration
            </h2>

            <div className="terminal-orchestration-item">
              <div className="terminal-item-label">
                <span />
                <strong>Isolation</strong>
              </div>
              <p>
                Failed components are automatically sandboxed. Our supervision
                strategies ensure that a single actor failure never cascades
                into a total system blackout.
              </p>
            </div>

            <div className="terminal-orchestration-item">
              <div className="terminal-item-label">
                <span />
                <strong>Elasticity</strong>
              </div>
              <p>
                Dynamic partitioning allows the system to breathe. As traffic
                surges, new nodes are provisioned in milliseconds, joining the
                cluster fabric without downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="terminal-protocol" aria-label="Initialization protocol">
        <div className="terminal-protocol-inner">
          <div className="terminal-protocol-heading">
            <h2>The Initialization Protocol</h2>
            <p>
              Implementing the Akka Cluster bootstrap sequence in production
              environments.
            </p>
          </div>

          <div className="terminal-config-window">
            <div className="terminal-config-bar">
              <div className="terminal-config-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>application.conf</span>
            </div>

            <div className="terminal-config-code" aria-label="Akka cluster application config">
              <span><span className="terminal-code-salmon">akka</span> {'{'}</span>
              <span>  <span className="terminal-code-salmon">actor</span> {'{'}</span>
              <span>    provider = <span className="terminal-code-salmon">"cluster"</span></span>
              <span>    serialization-bindings {'{'}</span>
              <span>      <span className="terminal-code-salmon">"com.vol9.CborSerializable"</span> = jackson-cbor</span>
              <span>    {'}'}</span>
              <span>  {'}'}</span>
              <span>  <span className="terminal-code-salmon">remote.artery</span> {'{'}</span>
              <span>    canonical {'{'}</span>
              <span>      hostname = <span className="terminal-code-salmon">"127.0.0.1"</span></span>
              <span>      port = <span className="terminal-code-salmon">2551</span></span>
              <span>    {'}'}</span>
              <span>  {'}'}</span>
              <span>  <span className="terminal-code-salmon">cluster</span> {'{'}</span>
              <span>    seed-nodes = [</span>
              <span>      <span className="terminal-code-salmon">"akka://Vol9System@127.0.0.1:2551"</span></span>
              <span>    ]</span>
              <span>    downing-provider-class = <span className="terminal-code-salmon">"akka.cluster.sbr.SplitBrainResolverProvider"</span></span>
              <span>  {'}'}</span>
              <span>{'}'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="terminal-scale" aria-label="Ready to scale">
        <div className="terminal-scale-watermark" aria-hidden="true">Deploy</div>
        <div className="terminal-scale-content">
          <h2>Ready to Scale?</h2>
          <p>
            Connect your infrastructure to the Volume 9 Core and start
            processing real-time telemetry at global scale.
          </p>
          <div className="terminal-scale-actions">
            <button type="button" className="terminal-scale-primary">Get Started</button>
            <button type="button" className="terminal-scale-secondary">Documentation</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Terminal
