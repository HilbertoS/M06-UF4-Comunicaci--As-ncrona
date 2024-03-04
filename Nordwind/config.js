<<<<<<< HEAD
const { Client } = require('pg');
const express = require('express'); 
require('dotenv').config(); // Carga las variables de entorno desde .env
=======
const { Client } = require('./node_modules/pg')
const express = require('./node_modules/express'); 
>>>>>>> e1e887ddd961ae895384071d6263e51d6804c210

const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
}

<<<<<<< HEAD
const client= new Client(config);
=======
const client = new Client(config);
>>>>>>> e1e887ddd961ae895384071d6263e51d6804c210

client.connect();
const app = express();
const PORT = 3001;

app.use('/', express.static('./public'));
app.use(express.json());

app.get('/products', async (req, res) => {
<<<<<<< HEAD
=======
   
>>>>>>> e1e887ddd961ae895384071d6263e51d6804c210
    try {
        const result = await client.query("SELECT * FROM products");
        const products = result.rows;
        console.log(products);
        res.json(products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error interno del servidor');
    } finally {
        await client.end();
    }
});
app.get('/orders', async (req, res) => {
   
    try {
        const result = await client.query("SELECT * FROM orders");
        const orders = result.rows;
        res.json(orders);
    } catch (error) {
        console.error('Error al obtener orders:', error);
        res.status(500).send('Error interno del servidor');
    } finally {
        await client.end();
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
