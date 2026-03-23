const degrees = [
  { degree: 'PhD — Ocean Engineering & Coastal Dynamics', institution: 'IIT Kharagpur', year: '2021', note: 'Tropical cyclogenesis, ocean heat content, North Indian Ocean basin.' },
  { degree: 'M.Tech — Ocean Technology', institution: 'CUSAT', year: '2017', note: 'Gold Medalist.' },
  { degree: 'B.E. — Civil Engineering', institution: 'Mahatma Gandhi University, Kottayam', year: '2014', note: '' },
];

export default function Education() {
  return (
    <section id="education" style={{ borderTop: '1px solid var(--border)' }} className="py-20">
      <div className="max-w-3xl mx-auto px-8">
        <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-widest mb-10">
          Education
        </p>
        <div className="space-y-6 mb-12">
          {degrees.map(d => (
            <div key={d.degree} className="flex gap-8">
              <span style={{ color: 'var(--text-muted)' }} className="text-xs w-9 flex-shrink-0 pt-0.5 opacity-50">{d.year}</span>
              <div>
                <p style={{ color: 'var(--text)' }} className="text-sm mb-0.5">{d.degree}</p>
                <p style={{ color: 'var(--text-muted)' }} className="text-xs">{d.institution}</p>
                {d.note && <p style={{ color: 'var(--text-muted)' }} className="text-xs opacity-60 mt-0.5">{d.note}</p>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--border)' }} className="pt-8 flex gap-8">
          {[{ lang: 'English', level: 'Fluent' }, { lang: 'Malayalam', level: 'Native' }, { lang: 'Hindi', level: 'Basic' }].map(l => (
            <div key={l.lang}>
              <p style={{ color: 'var(--text)' }} className="text-xs">{l.lang}</p>
              <p style={{ color: 'var(--text-muted)' }} className="text-xs opacity-50">{l.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
