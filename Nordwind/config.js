import pg from 'pg';
const { Client } = pg;
import express  from 'express'; 
import ordersRoutes  from './routas/order.js';

import dotenv from 'dotenv';

dotenv.config();
const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
}

const client = new Client(config);

client.connect();
const app = express();
const PORT = 3000;

app.use('/', express.static('./public'));
app.use(express.json());

app.use('/empleados', empleadosRoutes);

app.get('/products', async (req, res) => {
   
    try {
        const result = await client.query("select * from products join categories using(category_id)");
        const products = result.rows;
        console.log(products);
        res.json(products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error interno del servidor');
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
