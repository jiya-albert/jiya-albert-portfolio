const interests = [
  { title: 'Hydrodynamic & Ocean Circulation Modeling', desc: 'High-resolution coastal and shelf-sea simulations using MIKE, DELFT3D, TELEMAC, and ADCIRC.' },
  { title: 'Tropical Cyclone Dynamics', desc: 'Cyclogenesis, rapid intensification, track behavior, and ocean heat content across the North Indian Ocean.' },
  { title: 'Environmental Impact Assessment', desc: 'EIA modeling for coastal and offshore projects — oil spill, sediment transport, air dispersion, water quality.' },
  { title: 'Regional Climate Dynamics', desc: 'Sea-level rise projections, Rossby waves, ENSO teleconnections across the Arabian Peninsula using WRF.' },
  { title: 'Remote Sensing & Marine Observation', desc: 'Sentinel-2 and ocean-colour data for bathymetry, benthic habitats, chlorophyll-a, and oil spill detection.' },
  { title: 'Coastal Erosion & Green Infrastructure', desc: 'Living shoreline design combining field data, cost-benefit analysis, and morphodynamic modeling.' },
];

export default function ResearchInterests() {
  return (
    <section style={{ borderTop: '1px solid var(--border)' }} className="py-20">
      <div className="max-w-3xl mx-auto px-8">
        <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-widest mb-10">
          Research Interests
        </p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {interests.map(item => (
            <div key={item.title}>
              <p style={{ color: 'var(--text)' }} className="text-sm font-medium mb-1.5">{item.title}</p>
              <p style={{ color: 'var(--text-muted)' }} className="text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
