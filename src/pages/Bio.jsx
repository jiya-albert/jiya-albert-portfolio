import { useScrollReveal } from '../hooks/useScrollReveal';

// ── Education data ────────────────────────────────────────────────────────────
const education = [
  {
    degree: 'PhD — Ocean Engineering & Naval Architecture',
    school: 'Indian Institute of Technology, Kharagpur',
    year: '2021',
    note: null,
    detail: 'Dissertation focused on tropical cyclogenesis and ocean heat content in the North Indian Ocean.',
  },
  {
    degree: 'MTech — Ocean Technology',
    school: 'Cochin University of Science and Technology (CUSAT)',
    year: '2017',
    note: 'Gold Medalist',
    detail: null,
  },
  {
    degree: 'BE — Civil Engineering',
    school: 'Mahatma Gandhi University, Kottayam',
    year: '2014',
    note: null,
    detail: null,
  },
];

// ── Simple wave decor ─────────────────────────────────────────────────────────
function WaveDecor() {
  return (
    <div style={{ padding: '3.5rem 0 2rem', display: 'flex', justifyContent: 'center' }}>
      <svg viewBox="0 0 240 28" fill="none" style={{ width: 160, display: 'block' }}
           aria-hidden="true">
        <path d="M0 8 C30 2, 60 14, 90 8 C120 2, 150 14, 180 8 C210 2, 228 8, 240 8"
              stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.55" />
        <path d="M0 16 C30 10, 60 22, 90 16 C120 10, 150 22, 180 16 C210 10, 228 16, 240 16"
              stroke="var(--accent)" strokeWidth="0.9" strokeOpacity="0.3" />
        <path d="M0 22 C30 17, 60 27, 90 22 C120 17, 150 27, 180 22 C210 17, 228 22, 240 22"
              stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.18" />
      </svg>
    </div>
  );
}

export default function Bio() {
  const ref = useScrollReveal();

  return (
    <main className="page">
      <div className="section" ref={ref}>

        {/* Wave decor — visible immediately, no reveal delay */}
        <WaveDecor />

        {/* ── Research statement ───────────────────────────────────────────── */}
        <div className="bio-statement" data-reveal="1">
          <p>
            I started with cyclones. My PhD at IIT Kharagpur tracked how ocean heat in the
            Bay of Bengal drives tropical cyclogenesis — how a warm sea surface, under the
            right atmospheric conditions, can spin up into something that reshapes coastlines.
            I spent years on that question.
          </p>
          <p>
            Now I work at KFUPM's ARCEMS in Saudi Arabia, leading the Environmental Modeling
            Group. The geography has changed — Bay of Bengal to the Arabian Gulf — but the
            ocean stays at the centre of it. I run numerical simulations for environmental
            impact assessments on coastal and offshore projects, and apply ISO 14001-aligned
            management frameworks to translate model outputs into decisions that actually
            get used.
          </p>
          <p>
            My applied research spans hydrodynamics, sediment transport, oil spill modelling,
            and air dispersion, often in direct collaboration with Saudi Aramco, the Royal
            Commission, and NEOM. The tools change. The fundamental interest — what the ocean
            does, and what that means for the people and systems that depend on it — does not.
          </p>
        </div>

        <div className="bio-divider" data-reveal="2" />

        {/* ── Education ────────────────────────────────────────────────────── */}
        <p className="section-label" data-reveal="3">Education</p>

        <div className="edu-timeline">
          {education.map((e, i) => (
            <div key={i} className="edu-item" data-reveal={String(i + 3)}>
              <p className="edu-degree">{e.degree}</p>
              <p className="edu-school">{e.school}</p>
              <p className="edu-year">{e.year}</p>
              {e.note && <span className="edu-note">{e.note}</span>}
              {e.detail && (
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.3rem', lineHeight: 1.6 }}>
                  {e.detail}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
