import './App.css'

const situations = [
  { title: 'Sortir du dépôt', description: 'Accéder aux étapes dès qu’elles seront disponibles.', icon: '🚋' },
  { title: 'Avant de rouler', description: 'Préparer la mise en service en suivant la procédure.', icon: '🧭' },
  { title: 'Arrivée en station', description: 'Retrouver rapidement les actions à effectuer.', icon: '📍' },
  {
    title: 'Anomalie',
    description: 'Consulter la conduite à tenir en cas de situation inhabituelle.',
    variant: 'anomaly',
    icon: '⚠️',
    marker: 'Signal prioritaire',
  },
]

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Accueil Tram">
          Tram
        </a>
        <button type="button" className="help-button">
          Aide
        </button>
      </header>

      <main className="content">
        <section className="hero" aria-labelledby="hero-title">
          <p className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            Guide interactif
          </p>

          <h1 id="hero-title">Votre guide opérationnel tramway</h1>

          <p>
            Sélectionnez une situation pour afficher clairement les étapes à suivre.
          </p>

          <div className="hero-progress" aria-label="Repère de progression">
            <span className="hero-progress-label">Démarrage rapide</span>
            <div
              className="hero-progress-track"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={35}
              aria-valuetext="Progression de découverte : 35 %"
            >
              <span className="hero-progress-fill" />
            </div>
          </div>

          <button type="button" className="primary-cta">
            <span>Commencer</span>
            <span aria-hidden="true">→</span>
          </button>
        </section>

        <section className="situations" aria-label="Situations">
          {situations.map((situation) => (
            <button
              key={situation.title}
              type="button"
              className={`situation-card${situation.variant ? ` ${situation.variant}` : ''}`}
            >
              <span className="card-topline">
                <span className="card-icon" aria-hidden="true">
                  {situation.icon}
                </span>
                {situation.marker && <span className="card-marker">{situation.marker}</span>}
              </span>
              <span className="card-title">{situation.title}</span>
              <span className="card-description">{situation.description}</span>
            </button>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
