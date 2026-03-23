export default function Home() {
  return (
    <main className="home">
      {/* ── Left: text panel ─────────────────────────────────────────────── */}
      <div className="home-text">
        <h1 className="home-name">Jiya Albert</h1>
        <p className="home-title">Metocean Scientist</p>
        <p className="home-tagline">
          A researcher passionate about atmospheric and ocean science,<br />
          satellite observations and sub meso scale models.
        </p>
      </div>

      {/* ── Right: photo panel ───────────────────────────────────────────── */}
      <div className="home-photo-panel">
        <img
          src="/jiya.jpg"
          alt="Dr. Jiya Albert"
          loading="eager"
        />
      </div>
    </main>
  );
}
