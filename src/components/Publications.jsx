const journals = [
  { authors: 'Shafeeque M., Saleem A.A., Chaitanya A.V., Lateef S., & Albert J.*', year: 2025, title: 'Chlorophyll-a Modulation in the Arabian Gulf Using Two-decades Merged Ocean-Colour Data.', journal: 'Frontiers in Marine Science', doi: 'https://doi.org/10.3389/fmars.2025.1619821', selected: true },
  { authors: 'Abdul Azeez S., Chaitanya A.V.S. et al., Albert J.*', year: 2026, title: 'Sediment Transport Modelling of Trenching Activities: Safaniya Coastal Waters, Arabian Gulf.', journal: 'Ocean Dynamics', doi: 'https://doi.org/10.1007/s10236-025-01754-8', selected: true },
  { authors: 'Saleem A.V., Lateef A., Chaitanya, Shafeeque, Albert J.*', year: 2026, title: 'Advancing Marine Oil Spill Detection in the Arabian Gulf: SAR and Optical Satellite Imagery.', journal: 'Arabian Journal for Science and Engineering', doi: 'https://doi.org/10.1007/s13369-025-11036-6', selected: true },
  { authors: 'Neelavannan K. et al., Albert J. & Alhems L.', year: 2025, title: 'Neelavannan et al.', journal: 'Scientific Reports', doi: 'https://doi.org/10.1038/s41598-025-98136-3' },
  { authors: 'Albert J., Gulakaram V.S., Vissa N.K., Bhaskaran P.K., Dash M.K.', year: 2023, title: 'Recent Warming Trends in the Arabian Sea: Causative Factors and Physical Mechanisms.', journal: 'Climate', doi: 'https://doi.org/10.3390/cli11020035' },
  { authors: 'Albert J., Sahoo B. & Bhaskaran P.K.', year: 2021, title: 'Tropical Cyclogenesis Identification Using Eddy Detection Technique for the Bay of Bengal Basin.', journal: 'Atmospheric Research', doi: 'https://doi.org/10.1016/j.atmosres.2021.105670' },
  { authors: 'Albert J., Krishnan A., Bhaskaran P.K. & Singh K.S.', year: 2022, title: 'Role and Influence of Key Atmospheric Parameters in Tropical Cyclogenesis and ENSO in the North Indian Ocean Basin.', journal: 'Climate Dynamics', doi: 'https://doi.org/10.1007/s00382-021-05885-8' },
  { authors: 'Kuvar S.S., Ambily T., Thatiparthi K., Reshma M., Albert J. et al.', year: 2022, title: 'Prediction of Rapid Intensification for Land-Falling Extremely Severe Cyclonic Storms in the Bay of Bengal.', journal: 'Theoretical and Applied Climatology', doi: 'https://doi.org/10.1007/s00704-022-03923-x' },
  { authors: 'Albert J. & Bhaskaran P.K.', year: 2020, title: 'Ocean Heat Content and Its Role in Tropical Cyclogenesis for the Bay of Bengal Basin.', journal: 'Climate Dynamics', doi: 'https://doi.org/10.1007/s00382-020-05450-9' },
  { authors: 'Albert J. & Bhaskaran P.K.', year: 2023, title: 'Evaluation of Multi-Level Upper Ocean Heat Content and Tropical Cyclone Intensity in the North Indian Ocean.', journal: 'Theoretical and Applied Climatology', doi: 'https://doi.org/10.1007/s00704-023-04641-8' },
  { authors: 'Albert J. & Bhaskaran P.K.', year: 2020, title: 'Optimal Grid Resolution for the Detection Lead Time of Cyclogenesis in the North Indian Ocean.', journal: 'Journal of Atmospheric and Solar-Terrestrial Physics', doi: 'https://doi.org/10.1016/j.jastp.2020.105289' },
  { authors: 'Singh K.S., Albert J., Bhaskaran P.K. & Alam P.', year: 2021, title: 'Assessment of Extremely Severe Cyclonic Storms over Bay of Bengal and ARW Model Performance Evaluation.', journal: 'Theoretical and Applied Climatology', doi: 'https://doi.org/10.1007/s00704-020-03510-y' },
];

const bookChapters = [
  { authors: 'Prasad K. Bhaskaran, Jiya Albert & Bishnupriya Sahoo', year: 2018, title: 'Tropical Cyclogenesis for North Indian Ocean Region.', book: 'Climate Change and the Vulnerable Indian Coast, Ch. 3', publisher: 'MoEF&CC, New Delhi' },
  { authors: 'Jiya Albert & Prasad K. Bhaskaran', year: 2021, title: 'Seasonal and Inter-Annual Variability of SST and Its Correlation with Maximum Sustained Wind Speed in Bay of Bengal.', book: 'Climate Change Impacts on Water Resources, Ch. 23' },
  { authors: 'Bhaskaran P.K., Neelamani S., Al-Salem K., Krishnan A., Albert J. & Sreelakshmi S.', year: 2022, title: 'Extreme Wind-Wave Characteristics in the North Indian Ocean in a Changing Climate.', book: 'Extreme Natural Events, Ch. 5', publisher: 'Springer Nature Singapore' },
];

const conferences = [
  { authors: 'Shafeeque M. et al., Albert J.', year: 2025, title: 'Decreasing Chlorophyll-a Trend in the Arabian Gulf and Associated Climate Variables.', venue: 'AGU Fall Meeting', date: 'Dec 2025' },
  { authors: 'Albert J. et al.', year: 2024, title: 'Mapping Bathymetry and Benthic Habitats in the Arabian Gulf Using Sentinel-2 Imagery.', venue: 'MedGU-24', date: 'Nov 2024' },
];

function Row({ title, authors, meta, doi, selected }) {
  return (
    <div style={{
      borderBottom: '1px solid var(--border)',
      borderLeft: selected ? '1px solid var(--text-muted)' : 'none',
      paddingLeft: selected ? '12px' : '0',
    }} className="py-4 flex items-start justify-between gap-6 last:border-b-0">
      <div className="flex-1 min-w-0">
        <p style={{ color: 'var(--text)' }} className="text-sm leading-snug mb-1">{title}</p>
        <p style={{ color: 'var(--text-muted)' }} className="text-xs">{authors}</p>
        <p style={{ color: 'var(--text-muted)' }} className="text-xs opacity-60 mt-0.5">{meta}</p>
      </div>
      {doi && (
        <a href={doi} target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)' }}
          className="flex-shrink-0 text-xs hover:opacity-100 transition-opacity mt-0.5">
          ↗
        </a>
      )}
    </div>
  );
}

export default function Publications() {
  return (
    <section id="publications" style={{ borderTop: '1px solid var(--border)' }} className="py-20">
      <div className="max-w-3xl mx-auto px-8">
        <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-widest mb-10">
          Publications
        </p>

        <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-wider mb-4 opacity-60">
          Peer-Reviewed Journals
        </p>
        <div className="mb-12">
          {journals.map((p, i) => (
            <Row key={i} title={p.title} authors={p.authors}
              meta={`${p.journal} · ${p.year}`} doi={p.doi} selected={p.selected} />
          ))}
        </div>

        <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-wider mb-4 opacity-60">
          Book Chapters
        </p>
        <div className="mb-12">
          {bookChapters.map((c, i) => (
            <Row key={i} title={c.title} authors={c.authors}
              meta={`${c.book} · ${c.year}${c.publisher ? ' · ' + c.publisher : ''}`} />
          ))}
        </div>

        <p style={{ color: 'var(--text-muted)' }} className="text-xs uppercase tracking-wider mb-4 opacity-60">
          Conferences
        </p>
        <div>
          {conferences.map((c, i) => (
            <Row key={i} title={c.title} authors={c.authors} meta={`${c.venue} · ${c.date}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
