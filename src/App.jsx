import './App.css'

const situations = [
  { title: 'Sortir du dépôt', description: 'Accéder aux étapes dès qu’elles seront disponibles.' },
  { title: 'Avant de rouler', description: 'Préparer la mise en service en suivant la procédure.' },
  { title: 'Arrivée en station', description: 'Retrouver rapidement les actions à effectuer.' },
  { title: 'Anomalie', description: 'Consulter la conduite à tenir en cas de situation inhabituelle.', variant: 'anomaly' },
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
          <span className="hero-badge" aria-label="Niveau de préparation">
            Prêt au départ
          </span>
          <h1 id="hero-title">Votre guide opérationnel tramway</h1>
          <p>
            Sélectionnez une situation pour afficher clairement les étapes à suivre.
          </p>
          <div className="hero-progress" role="img" aria-label="Progression des situations disponibles : 4 sur 4">
            <span aria-hidden="true">4 situations disponibles</span>
            <div className="hero-progress-track" aria-hidden="true">
              <span className="hero-progress-fill" />
            </div>
          </div>
          <button type="button" className="primary-cta">
            Commencer
          </button>
        </section>

        <section className="situations" aria-labelledby="situations-title">
          <h2 id="situations-title" className="situations-title">
            Situations
          </h2>
          {situations.map((situation, index) => (
            <button
              key={situation.title}
              type="button"
              className={`situation-card${situation.variant ? ` ${situation.variant}` : ''}`}
            >
              <span className="card-step" aria-hidden="true">
                Étape {index + 1}
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
