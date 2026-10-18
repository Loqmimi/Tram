import './App.css'

const situations = [
  {
    title: 'Sortir du dépôt',
    description: 'Accéder aux étapes dès qu’elles seront disponibles.',
    badge: 'Séquence 1',
  },
  {
    title: 'Avant de rouler',
    description: 'Préparer la mise en service en suivant la procédure.',
    badge: 'Séquence 2',
  },
  {
    title: 'Arrivée en station',
    description: 'Retrouver rapidement les actions à effectuer.',
    badge: 'Séquence 3',
  },
  {
    title: 'Anomalie',
    description: 'Consulter la conduite à tenir en cas de situation inhabituelle.',
    variant: 'anomaly',
    badge: 'Priorité',
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
          <p className="hero-kicker">Mode entraînement opérationnel</p>
          <h1 id="hero-title">Votre guide opérationnel tramway</h1>
          <p>
            Sélectionnez une situation pour afficher clairement les étapes à suivre.
          </p>
          <div className="hero-progress" role="group" aria-label="Progression type">
            <span className="progress-label">Progression type</span>
            <span className="progress-step">1/3</span>
          </div>
          <button type="button" className="primary-cta">
            Commencer
          </button>
        </section>

        <section className="situations" aria-label="Situations">
          {situations.map((situation) => (
            <button
              key={situation.title}
              type="button"
              className={`situation-card${situation.variant ? ` ${situation.variant}` : ''}`}
            >
              <span className="card-badge">{situation.badge}</span>
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
