const { Client } = require('./node_modules/pg')
const express = require('./node_modules/express'); 

const config = {
            user: 'postgres',
            host: 'localhost',
            database: 'Nordwind',
            password: 'alubbdd',
            port: 5432
}

const client = new Client(config);

client.connect();
const app = express();
const PORT = 3001;

app.use('/', express.static('./public'));
app.use(express.json());

app.get('/products', async (req, res) => {
   
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
