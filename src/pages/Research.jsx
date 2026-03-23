import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  cyclonePublications,
  arabianGulfPublications,
  bookChapters,
  conferencePublications,
} from '../data/publications';

function PubItem({ pub }) {
  return (
    <li className="pub-item" data-reveal="1">
      <span className="pub-year">{pub.year}</span>
      <div>
        <p className="pub-title">{pub.title}</p>
        <p className="pub-meta">
          <em>{pub.journal}</em>
          {pub.detail ? `, ${pub.detail}` : ''}
        </p>
        <p className="pub-authors">{pub.authors}</p>
        {pub.doi && (
          <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="pub-doi">
            <span className="pub-doi-icon">↗</span> DOI
          </a>
        )}
      </div>
    </li>
  );
}

function ChapterItem({ ch }) {
  return (
    <li className="chapter-item" data-reveal="1">
      <p className="pub-title">{ch.title}</p>
      <p className="chapter-book">{ch.book}</p>
      <p className="chapter-meta">
        {ch.chapter}{ch.publisher ? ` · ${ch.publisher}` : ''} · {ch.year}
      </p>
      <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontStyle: 'italic', marginTop: '0.12rem' }}>
        {ch.authors}
      </p>
    </li>
  );
}

function ConferenceItem({ pub }) {
  return (
    <li className="pub-item" data-reveal="1">
      <span className="pub-year">{pub.year}</span>
      <div>
        <p className="pub-title">{pub.title}</p>
        <p className="pub-meta"><em>{pub.venue}</em>{pub.detail ? ` · ${pub.detail}` : ''}</p>
        <p className="pub-authors">{pub.authors}</p>
      </div>
    </li>
  );
}

export default function Research() {
  const ref = useScrollReveal();

  return (
    <main className="page">
      <div className="section" ref={ref}>

        {/* ── Applied research ─────────────────────────────────────────────── */}
        <p className="section-label" data-reveal="1">Research Overview</p>
        <p data-reveal="2" style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '0.5rem' }}>
          Environmental modeling for coastal and offshore projects in the Arabian Gulf,
          spanning hydrodynamics, sediment transport, oil spill prediction, air dispersion,
          and climate risk. Applied work is conducted in direct collaboration with:
        </p>
        <div className="clients-row" data-reveal="3">
          {['Saudi Aramco', 'Royal Commission', 'NEOM', 'KFUPM ARCEMS'].map(c => (
            <span key={c} className="client-tag">{c}</span>
          ))}
        </div>

        {/* ── Research interests ───────────────────────────────────────────── */}
        <p className="section-label" data-reveal="1">Research Interests</p>
        <div data-reveal="2" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
          {[
            'Tropical Cyclogenesis',
            'Ocean Heat Content',
            'Numerical Ocean Modeling',
            'Environmental Impact Assessment',
            'Hydrodynamics & Coastal Dynamics',
            'Regional Climate Modeling',
            'Satellite Oceanography',
            'Oil Spill Modeling',
            'Air Dispersion Modeling',
            'Sediment Transport',
          ].map(i => (
            <span key={i} className="client-tag">{i}</span>
          ))}
        </div>

        {/* ── Tools & models ───────────────────────────────────────────────── */}
        <p data-reveal="3" style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '1rem', letterSpacing: '0.05em' }}>
          WRF · MIKE · DELFT3D · ADCIRC · TELEMAC · SWAN · CALPUFF · AERMOD · CadnaA · WRF-Chem · Python · MATLAB · FORTRAN
        </p>

        {/* ══ PUBLICATIONS ══════════════════════════════════════════════════ */}

        {/* Cyclones — her unique expertise, listed first */}
        <p className="pub-group-label" data-reveal="1">
          Tropical Cyclones &amp; North Indian Ocean &mdash; Core Expertise
        </p>
        <ul className="pub-list">
          {cyclonePublications.map((p, i) => <PubItem key={i} pub={p} />)}
        </ul>

        {/* Arabian Gulf */}
        <p className="pub-group-label" data-reveal="1">Arabian Gulf &amp; Applied Oceanography</p>
        <ul className="pub-list">
          {arabianGulfPublications.map((p, i) => <PubItem key={i} pub={p} />)}
        </ul>

        {/* Book chapters */}
        <p className="pub-group-label" data-reveal="1">Book Chapters</p>
        <ul className="chapter-list">
          {bookChapters.map((ch, i) => <ChapterItem key={i} ch={ch} />)}
        </ul>

        {/* Conference */}
        <p className="pub-group-label" data-reveal="1">Conference Proceedings</p>
        <ul className="pub-list">
          {conferencePublications.map((p, i) => <ConferenceItem key={i} pub={p} />)}
        </ul>

      </div>
    </main>
  );
}
