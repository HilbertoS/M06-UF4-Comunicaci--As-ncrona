import pg from 'pg';
const { Client } = pg;
import express  from 'express'; 
import ordersRoutes  from './routas/order.js';
import empleadosRoutes  from './routas/empleado.js';


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

app.use('/empleados', require('routas/empleado.js'))
app.use('/empleados', empleadosRoutes);

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
app.use('/orders', ordersRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
