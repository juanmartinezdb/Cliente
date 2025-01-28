const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Cambia la ruta a la de tu proyecto
app.use(express.static(path.join('/home/usuario/calendario', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join('/home/usuario/calendario', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
