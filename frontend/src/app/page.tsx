export default function HomePage() {
  return (
    <main className="status-page">
      <section className="status-panel" aria-labelledby="page-title">
        <p className="status-label">Frontend · ambiente local</p>
        <h1 id="page-title">ATELIER NOIR</h1>
        <p className="status-message" role="status">
          Ambiente de desenvolvimento funcionando.
        </p>
        <p className="status-note">Página técnica provisória.</p>
      </section>
    </main>
  );
}
