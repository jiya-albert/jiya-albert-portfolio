const groups = [
  { category: 'Hydrodynamic & Coastal', skills: ['MIKE', 'DELFT3D', 'TELEMAC', 'ADCIRC', 'SWAN', 'GENCADE'] },
  { category: 'Atmospheric & Climate', skills: ['WRF', 'WRF-Chem', 'CALPUFF', 'AERMOD', 'CadnaA'] },
  { category: 'Programming', skills: ['Python', 'MATLAB', 'FORTRAN', 'NCO/CDO'] },
  { category: 'Environmental Assessment', skills: ['EIA', 'Oil Spill Modeling', 'Air Dispersion', 'Sediment Transport', 'ISO 14001'] },
  { category: 'Remote Sensing & GIS', skills: ['Sentinel-2', 'SAR', 'Ocean-Colour', 'GIS', 'Bathymetry'] },
];

export default function TechnicalSkills() {
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)' }} className="py-20">
      <div className="max-w-3xl mx-auto px-8">
        <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-widest mb-10">
          Technical Skills
        </p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {groups.map(g => (
            <div key={g.category}>
              <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-wider mb-3">{g.category}</p>
              <div className="flex flex-wrap gap-2">
                {g.skills.map(s => (
                  <span key={s}
                    style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                    className="text-xs px-2.5 py-1 rounded-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
