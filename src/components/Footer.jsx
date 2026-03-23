export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }} className="py-12">
      <div className="max-w-3xl mx-auto px-8 flex flex-col sm:flex-row justify-between gap-2">
        <p style={{ color: 'var(--text-muted)' }} className="text-xs">© {new Date().getFullYear()} Jiya Albert</p>
        <p style={{ color: 'var(--text-muted)' }} className="text-xs opacity-50">IIT Kharagpur PhD · CUSAT Gold Medalist</p>
      </div>
    </footer>
  );
}
