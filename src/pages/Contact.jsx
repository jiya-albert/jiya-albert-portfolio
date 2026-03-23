import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <main className="page">
      <div className="section" ref={ref}>
        <p className="section-label" data-reveal="1">Get in Touch</p>

        <div className="contact-grid">

          {/* ── Address block ───────────────────────────────────────────── */}
          <div className="contact-block" data-reveal="2">
            <h3>Address</h3>
            <p className="contact-name">Dr. Jiya Albert</p>
            <p className="contact-role">Research Engineer III</p>
            <p className="contact-role">Environmental Modeling Group Lead</p>
            <p className="contact-addr">
              Applied Research Center for Environment<br />
              and Marine Studies (ARCEMS)<br />
              King Fahd University of Petroleum &amp; Minerals<br />
              Dhahran — Kingdom of Saudi Arabia
            </p>
          </div>

          {/* ── Contact details ─────────────────────────────────────────── */}
          <div className="contact-block" data-reveal="3">
            <h3>Direct Contact</h3>
            <div>
              <div className="contact-line">
                <span className="contact-icon">📞</span>
                <a href="tel:+966138603554" style={{ color: 'var(--text)' }}>
                  +966 13 860 3554
                </a>
              </div>
              <div className="contact-line">
                <span className="contact-icon">✉</span>
                <a href="mailto:jiya.bert@kfupm.edu.sa" style={{ color: 'var(--text)' }}>
                  jiya.bert@kfupm.edu.sa
                </a>
              </div>
              <div className="contact-line">
                <span className="contact-icon">✉</span>
                <a href="mailto:jiya.albert@hotmail.com" style={{ color: 'var(--text)' }}>
                  jiya.albert@hotmail.com
                </a>
              </div>
            </div>
          </div>

          {/* ── Online profiles ─────────────────────────────────────────── */}
          <div className="contact-block" data-reveal="4">
            <h3>Online</h3>
            <div className="contact-social">
              <a href="https://www.linkedin.com/in/jiya-albert" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"
                     style={{ color: 'var(--text-dim)', flexShrink: 0 }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/jiya-albert" target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"
                     style={{ color: 'var(--text-dim)', flexShrink: 0 }}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                github.com/jiya-albert
              </a>
            </div>
          </div>

          {/* ── Affiliation note ────────────────────────────────────────── */}
          <div className="contact-block" data-reveal="5">
            <h3>Affiliation</h3>
            <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
              KFUPM is one of the premier science and engineering universities in the Arabian
              Gulf, with over 40 years of marine research in the region. ARCEMS supports
              environmental modeling and assessment for coastal and offshore development
              across Saudi Arabia.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
