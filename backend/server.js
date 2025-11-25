const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Liste des posts
const postList = [
  { id: '1', titre: "Premier post", contenu: 'détails premier post' },
  { id: '2', titre: "Deuxième post", contenu: 'détails deuxième post' },
  { id: '3', titre: "Troisième post", contenu: 'détails troisième post' }
];

// API REST demandée à l’examen
app.get('/postList', (req, res) => {
  res.json(postList);
});

// Servir le futur build Angular (quand tu feras ng build)
app.use(express.static(path.join(__dirname, 'www')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré avec succès sur http://localhost:${PORT}`);
});