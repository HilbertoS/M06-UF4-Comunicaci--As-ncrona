// export function fetchUserInfo() {
//     return new Promise((resolve, reject) => {
//         const username = document.getElementById('usernameInput').value;
//     })
// }

// import { fetchUserInfo } from './index.js';

const express = require('express');
const app = express();

const PORT = 3000;



app.get('/', async (req, res) => {
    res.send(req.route.stack);
});
app.get('/hola', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al obtener datos de la API' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor proxy escuchando en http://localhost:${PORT}`);
});