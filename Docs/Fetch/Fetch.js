const express = require("./node_modules/express");
const app = express();

const PORT = 3000;

app.use(express.json());

// Ruta de proxy para reenviar las solicitudes a la API
app.get('/', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor proxy escuchando en http://localhost:${PORT}`);
});