const { Client } = require('pg')
const express = require('express'); 

const config = {
            user: 'postgres',
            host: 'localhost',
            database: 'Nordwind',
            password: 'alubbdd',
            port: 5432
}

const client = new Client(config)

client.connect();
const app = express();
const PORT = 3001;

app.use('/', express.static('./public'));
app.use(express.json());

app.get('/', async (req, res) => {
   

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
