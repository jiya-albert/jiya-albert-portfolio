export default function Hero() {
  return (
    <section id="about" className="min-h-[88vh] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-8 py-24">

        {/* The statement */}
        <p style={{ color: 'var(--text)' }}
          className="text-2xl md:text-3xl font-light leading-relaxed tracking-tight mb-16 max-w-xl">
          "A researcher passionate about ocean science, satellite observations and ocean models."
        </p>

        {/* Basic academic info */}
        <div className="space-y-1" style={{ color: 'var(--text-muted)' }}>
          <p className="text-sm">Jiya Albert, PhD</p>
          <p className="text-sm">Research Engineer III · Environmental Modeling Group Lead</p>
          <p className="text-sm">ARCEMS · King Fahd University of Petroleum &amp; Minerals</p>
          <p className="text-sm">Dhahran, Saudi Arabia</p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border)' }} className="mt-12 pt-8">
          <div className="flex flex-wrap gap-6" style={{ color: 'var(--text-muted)' }}>
            <span className="text-xs">Numerical Modeling</span>
            <span className="text-xs">EIA</span>
            <span className="text-xs">Tropical Cyclones</span>
            <span className="text-xs">Arabian Gulf</span>
            <span className="text-xs">Remote Sensing</span>
            <span className="text-xs">WRF · MIKE · ADCIRC</span>
          </div>
        </div>

      </div>
    </section>
  );
}
