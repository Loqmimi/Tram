# Tram

Application React d’aide opérationnelle pour les procédures du tramway.

## Version déployée

Après le premier déploiement GitHub Pages sur `main`, la page sera disponible ici :

- <https://loqmimi.github.io/Tram/>

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir l’URL affichée par Vite.

## Scripts

- `npm run dev` : lance le serveur de développement.
- `npm run build` : crée le build de production.
- `npm run preview` : prévisualise le build localement.
- `npm run lint` : exécute la vérification lint (`oxlint`).

## Déploiement

Le workflow GitHub Actions `.github/workflows/deploy.yml` déploie automatiquement sur GitHub Pages à chaque push sur `main`.
