<<<<<<< HEAD
const { Client } = require('./node_modules/pg')
const express = require('./node_modules/express'); 
require('dotenv').config();
=======
const { Client } = require('pg');
const express = require('express'); 
require('dotenv').config(); // Carga las variables de entorno desde .env

>>>>>>> c59cc5716f07f6917f65b95db0a1866f8bece922
const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
}

<<<<<<< HEAD
const client = new Client(config);
=======
const client= new Client(config);
>>>>>>> c59cc5716f07f6917f65b95db0a1866f8bece922

client.connect();
const app = express();
const PORT = 3001;

app.use('/', express.static('./public'));
app.use(express.json());

app.get('/products', async (req, res) => {
<<<<<<< HEAD
   
=======
>>>>>>> c59cc5716f07f6917f65b95db0a1866f8bece922
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

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
