# Site web de mariage - Amel & Tarek

Site web élégant au style Versaillais chic pour le mariage d'Amel & Tarek le 11 octobre 2025 au Château De Neuville.

## 🎉 Fonctionnalités

- **Design Versaillais chic** avec couleurs sobres (blanc cassé, doré, beige)
- **Responsive** - optimisé pour mobile, tablette et desktop
- **Navigation fluide** avec menu déroulant
- **Pages complètes** :
  - Accueil avec programme détaillé
  - Détails de transport et organisation
  - Informations utiles pour les invités
  - Contact avec coordonnées
  - Confirmation de présence (Google Form)
- **Carrousel d'images** du château
- **Footer élégant** avec photo du château

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Configuration du repository

1. Créez un nouveau repository GitHub
2. Copiez tous les fichiers du dossier `frontend/` dans votre repository
3. Modifiez le `package.json` :
   ```json
   "homepage": "https://votreusername.github.io/votre-repo-name"
   ```

### Étape 2 : Configuration GitHub Pages

1. Allez dans **Settings** > **Pages** de votre repository
2. Sous **Source**, sélectionnez **GitHub Actions**
3. Le workflow sera automatiquement détecté

### Étape 3 : Déploiement automatique

1. Pushez votre code sur la branche `main`
2. Le site sera automatiquement buildé et déployé
3. Votre site sera disponible à l'adresse configurée dans `homepage`

### Déploiement manuel (optionnel)

```bash
cd frontend
npm install
npm run build
npm run deploy
```

## 🛠️ Configuration du Google Form

Pour activer la confirmation de présence :

1. Créez un Google Form avec les questions nécessaires :
   - Nom, Prénom
   - Téléphone, Email
   - Nombre d'invités
   - Présence à la cérémonie/réception
   - Allergies alimentaires
   - Message optionnel

2. Récupérez l'URL de votre Google Form

3. Modifiez le fichier `src/pages/ConfirmationPage.jsx` :
   ```javascript
   const GOOGLE_FORM_URL = "https://forms.gle/votre-form-id";
   ```

## 📱 Responsive Design

Le site s'adapte automatiquement à tous les écrans :
- **Mobile** (< 640px) : Layout simplifié, navigation tactile
- **Tablet** (641px - 1024px) : Grille responsive
- **Desktop** (> 1024px) : Expérience complète

## 🎨 Personnalisation

### Couleurs
Les couleurs principales peuvent être modifiées dans `src/App.css` :
```css
:root {
  --amber-50: #fffbeb;
  --amber-600: #d97706;
  --rose-500: #f43f5e;
}
```

### Images
Remplacez les URLs d'images dans :
- `src/components/ImageCarousel.jsx` (carrousel)
- `src/components/Footer.jsx` (photo château footer)
- `src/pages/ContactPage.jsx` (si applicable)

### Contenu
Modifiez le contenu dans les fichiers des pages :
- `src/pages/HomePage.jsx`
- `src/pages/DetailsPage.jsx`
- `src/pages/ContactPage.jsx`
- `src/pages/InfosUtilesPage.jsx`

## 📦 Technologies utilisées

- **React 19** - Framework JavaScript
- **Tailwind CSS** - Styles
- **shadcn/ui** - Composants UI
- **Lucide React** - Icônes
- **React Router** - Navigation

## 🔧 Développement local

```bash
cd frontend
npm install
npm start
```

Le site sera disponible sur `http://localhost:3000`

## 📞 Support

Pour toute question sur le déploiement ou la personnalisation du site, consultez la documentation GitHub Pages ou les issues du repository.

---

**Créé avec ❤️ pour Amel & Tarek** 
*11 Octobre 2025 - Château De Neuville*

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
