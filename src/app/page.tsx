const logos = ["Morgan Stanley", "Chipotle", "Siemens", "Salesforce", "BMW", "ServiceNow", "Slack", "DocuSign"];
const agents = [
  { name: "Green", title: "Turn risk into fixes", text: "Prioritize exposure and translate cloud risk into actionable engineering fixes." },
  { name: "Red", title: "Find attack paths", text: "Continuously explore attack paths and expose how seemingly small issues connect." },
  { name: "Blue", title: "Investigate faster", text: "Give security teams context-rich investigation and response workflows." },
];
const pillars = [
  { title: "Secure development", text: "Connect code, cloud context and risk so teams can prevent issues earlier." },
  { title: "Prevent cloud & AI risks", text: "See misconfigurations, identities, data and AI exposure through a unified security graph." },
  { title: "Runtime protection", text: "Detect suspicious activity and respond with context across production environments." },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top">Wiz</a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#platform">Platform</a>
            <a href="#solutions">Solutions</a>
            <a href="#pricing">Pricing</a>
            <a href="#customers">Customers</a>
            <a href="#resources">Resources</a>
          </nav>
          <a className="nav-cta" href="#demo">Get a demo</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Cloud & AI security</div>
            <h1 className="display">Protect everything you build and run.</h1>
            <p className="body-copy">Unify code, cloud and runtime context to secure the modern enterprise at the speed of AI.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#demo">See Wiz in action</a>
              <a className="btn btn-secondary" href="#platform">Explore the platform</a>
            </div>
            <div className="form-row">
              <input className="input" type="email" placeholder="Work email" aria-label="Work email" />
              <a className="btn btn-primary" href="#demo">Request demo</a>
            </div>
          </div>
          <div className="hero-orb" aria-label="Abstract security visualization" />
        </div>
      </section>

      <section id="customers" className="section">
        <div className="container">
          <div className="eyebrow">Trusted by enterprise teams</div>
          <h2 className="h2" style={{ marginTop: 14 }}>Customers rate Wiz #1 in cloud security.</h2>
          <p className="body-copy" style={{ maxWidth: 700 }}>A trust rail built around recognizable enterprise brands and proof points.</p>
          <div className="logo-rail">
            {logos.map((logo) => <div className="logo-pill" key={logo}>{logo}</div>)}
          </div>
        </div>
      </section>

      <section id="platform" className="section section-soft">
        <div className="container">
          <div className="eyebrow">One security platform</div>
          <h2 className="h2" style={{ marginTop: 14, maxWidth: 850 }}>A new operating model for AI-era security.</h2>
          <p className="body-copy" style={{ maxWidth: 760, marginTop: 22 }}>Security teams need context that travels from source code to cloud infrastructure to runtime. The platform model makes that context actionable.</p>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {pillars.map((item) => (
              <article className="card" key={item.title}>
                <div className="icon-box">→</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="section">
        <div className="container split">
          <div>
            <div className="eyebrow">AI security agents</div>
            <h2 className="h2" style={{ marginTop: 14 }}>AI that helps security teams act.</h2>
            <p className="body-copy" style={{ marginTop: 20 }}>The current site presents three agent concepts around remediation, attack-path discovery and security investigation.</p>
          </div>
          <div className="panel">
            <strong style={{ fontSize: "1.1rem" }}>Agent workflow</strong>
            <div className="panel-grid">
              {agents.map((agent) => (
                <div className="panel-chip" key={agent.name}>
                  <div style={{ color: "#8bc0ff", fontWeight: 800, marginBottom: 8 }}>{agent.name}</div>
                  <div style={{ fontWeight: 700, marginBottom: 8 }}>{agent.title}</div>
                  <div style={{ color: "#b9c8de", lineHeight: 1.5, fontSize: ".92rem" }}>{agent.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="eyebrow">Exposure → analysis → fix</div>
          <h2 className="h2" style={{ marginTop: 14, maxWidth: 850 }}>From exposure to code fix.</h2>
          <p className="body-copy" style={{ maxWidth: 760, marginTop: 20 }}>The interaction model observed on the site uses a guided workflow to move from a discovered risk to analysis, remediation and detection.</p>
          <div className="grid-4" style={{ marginTop: 40 }}>
            {["Scan", "Analyze", "Fix", "Detect"].map((step, i) => (
              <article className="card" key={step}>
                <div className="icon-box">0{i + 1}</div>
                <h3>{step}</h3>
                <p>Focused stage in the code-to-cloud security workflow.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container testimonial">
          <div className="quote">
            <div className="eyebrow" style={{ color: "#8bc0ff" }}>Customer perspective</div>
            <p>Security needs context, speed and a shared view across the entire environment.</p>
            <small>Enterprise security leadership testimonial pattern.</small>
          </div>
          <div className="quote-art" aria-hidden="true" />
        </div>
      </section>

      <section id="pricing" className="section section-soft">
        <div className="container">
          <div className="eyebrow">Platform outcomes</div>
          <h2 className="h2" style={{ marginTop: 14 }}>Driving outcomes.</h2>
          <div className="stats">
            <div className="stat"><strong>Speed</strong><span>Reduce time from signal to action.</span></div>
            <div className="stat"><strong>Impact</strong><span>Prioritize the risks that matter most.</span></div>
            <div className="stat"><strong>Simplicity</strong><span>Unify security context on one platform.</span></div>
          </div>
        </div>
      </section>

      <section id="demo" className="section">
        <div className="container" style={{ textAlign: "center", maxWidth: 900 }}>
          <div className="eyebrow">Ready to see it?</div>
          <h2 className="h2" style={{ marginTop: 14 }}>Ready to see Wiz in action?</h2>
          <p className="body-copy" style={{ maxWidth: 650, margin: "20px auto 28px" }}>Book a demo to explore a security workflow built around real context.</p>
          <a className="btn btn-primary" href="#top">Get a demo</a>
        </div>
      </section>

      <footer id="resources" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div><div className="logo">Wiz</div><p style={{ color: "#93a1b3", lineHeight: 1.6, maxWidth: 280 }}>A reconstructed public-site test based on the AI Website Cloner workflow.</p></div>
            <div><h4>Platform</h4><a href="#platform">Overview</a><a href="#solutions">Code</a><a href="#solutions">Defend</a></div>
            <div><h4>Learn</h4><a href="#resources">Resources</a><a href="#resources">Customers</a><a href="#resources">Blog</a></div>
            <div><h4>Company</h4><a href="#resources">About</a><a href="#resources">Events</a><a href="#resources">Contact</a></div>
            <div><h4>Legal</h4><a href="#resources">Privacy</a><a href="#resources">Terms</a><a href="#resources">Cookie settings</a></div>
          </div>
          <div className="footer-bottom">Webclone test project · Based on the public structure observed at WIZ.IO.</div>
        </div>
      </footer>
    </main>
  );
}
