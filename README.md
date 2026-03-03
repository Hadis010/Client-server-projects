# Dépôt final — Projet 5

Dépôt regroupant le **projet principal** (site de l’association Si t’es U), les **travaux pratiques (TP)**, les **travaux dirigés (TD)** et les **devoirs** réalisés dans le cadre du cursus L2 Informatique.

**Auteur :** Dini Hafsa  
**Contexte :** L2 Info, Brest

---

## Structure du dépôt

```
depot_finale/
├── projet/          # Site web de l'association Si t'es U (projet principal)
├── tp/              # Travaux pratiques (HTML, CSS, mise en page)
├── td/              # Travaux dirigés (formulaires, liens, XML, jeux)
├── devoir/          # Devoirs (Flexbox, formulaires, BDD XML)
└── README.md
```

---

## Projet principal : Si t’es U

Site vitrine de l’**association Si t’es U**, qui représente les résidents des cités universitaires du CLOUS de Brest (Kergoat, Bouguen, Lanrédec).

### Accès au site

Ouvrir **`projet/index.html`** dans un navigateur (ou servir le dossier `projet/` avec un serveur local).

### Pages

| Page | Fichier | Description |
|------|---------|-------------|
| **Présentation** | `index.html` | Présentation de l’association, objectifs, tableau récapitulatif, liste des cités |
| **Événements** | `page/Evenements.html` | Diaporama des événements avec navigation (Previous/Next, miniatures) |
| **Membres** | `page/Membres.html` | Présentation des membres du bureau (Président, Secrétaire, Trésorier, etc.) |
| **Collaborations** | `page/Formulaire.html` | Formulaire de contact / collaboration avec validation JavaScript |

### Technologies utilisées

- **HTML5** — structure des pages
- **CSS3** — mise en forme (feuilles : `Stylesheet.css`, `Stylesheet1.css`, `Stylesheet2.css`, `style.css`)
- **JavaScript** — diaporama (`script2.js`), formulaire et effets (`function.js`, `scriptjava.js`)
- **XML** — données utilisateurs dans `projet/data/base.xml` (à usage pédagogique)
- **Google Fonts** — polices Oswald et Roboto

### Dossiers du projet

- **`projet/css/`** — feuilles de style
- **`projet/script/`** — scripts JavaScript
- **`projet/page/`** — pages internes (Événements, Membres, Formulaire)
- **`projet/img/`** — images et logos (événements, membres, navigation)
- **`projet/data/`** — fichier XML de données

---

## Travaux pratiques (TP)

- **TP 1** — Rappels HTML/CSS, mises en page avec divisions et propriétés CSS (Exercices 0, 1, 2, 3)
- **TP 2** — JavaScript et diaporamas (js1_ve, js2_ve)

---

## Travaux dirigés (TD)

- **TD 1** — Liens relatifs/absolus, chemins, images, exercices HTML (ex2 à ex6, td1_ex1)
- **TD 2** — Formulaires (`dwc_form1_ve.html`), jeux et clavier (`dwc_game1_ve.html`, `dwc_keyboard_ve.html`)

---

## Devoirs

- **Devoir 1** — Page HTML/CSS (thème Centaure) + fiche sur la Flexbox (`Flexbox.docx`)
- **Devoir 2** — Formulaire HTML complet (champs variés : date, fichier, couleur, etc.)
- **Devoir 3** — Manipulation de données XML en JavaScript (chargement, affichage, ajout, sauvegarde) — `dwc_xml_ve.html` + `script/bdd_xml.js`

---

## Prérequis et utilisation

- Aucune installation spécifique : le projet est en **HTML/CSS/JavaScript** statique.
- Ouvrir les fichiers `.html` directement dans un navigateur, ou utiliser un serveur local (ex. Live Server, `python -m http.server`) pour éviter les restrictions CORS si besoin (par exemple pour charger du XML).
- Encodage : **UTF-8** (déclaré dans les pages).

---

## Licence et usage

Contenu à usage pédagogique (L2 Informatique).  
Les images et textes du projet Si t’es U sont liés au contexte associatif décrit dans les pages.
