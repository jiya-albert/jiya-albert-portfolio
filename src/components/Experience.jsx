const roles = [
  {
    org: 'King Fahd University of Petroleum & Minerals (KFUPM)',
    sub: 'ARCEMS · Dhahran, Saudi Arabia',
    title: 'Research Engineer III — Environmental Modeling Group Lead',
    period: 'Apr 2023 – Present',
    bullets: [
      'EIA and climate numerical simulations — hydrodynamics, oil spill, air dispersion, sediment transport.',
      'Deploys WRF, MIKE, ADCIRC, DELFT3D, CALPUFF, AERMOD, CadnaA.',
      'ISO 14001-aligned Environmental and Waste Management Plans.',
      'Sea-level rise projections and ENSO teleconnection studies, Arabian Peninsula.',
    ],
  },
  {
    org: 'National Centre for Sustainable Coastal Management',
    sub: 'Chennai, India',
    title: 'Scientific Consultant',
    period: 'Jan 2022 – Mar 2023',
    bullets: [
      'Living shoreline design at high-erosion sites; MIKE and GENCADE modeling.',
      'GCRF South Asia Nitrogen Hub — nutrient modeling using MIKE-SHE and WRF.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ borderTop: '1px solid var(--border)' }} className="py-20">
      <div className="max-w-3xl mx-auto px-8">
        <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-widest mb-10">
          Experience
        </p>
        <div className="space-y-12">
          {roles.map(role => (
            <div key={role.title}>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 mb-1">
                <p style={{ color: 'var(--text)' }} className="text-sm font-medium">{role.org}</p>
                <span style={{ color: 'var(--text-muted)' }} className="text-xs">{role.period}</span>
              </div>
              <p style={{ color: 'var(--text-muted)' }} className="text-xs mb-3">{role.sub}</p>
              <p style={{ color: 'var(--text-muted)' }} className="text-xs mb-4 opacity-70">{role.title}</p>
              <ul className="space-y-1.5">
                {role.bullets.map((b, i) => (
                  <li key={i} style={{ color: 'var(--text-muted)' }} className="text-xs leading-relaxed flex gap-3">
                    <span className="mt-1.5 opacity-40">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
