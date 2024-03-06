import pg from 'pg';

const { Client } = pg;
import express  from 'express'; 
import ordersRoutes  from './controllers/orders.js';
import empleadosRoutes  from './controllers/empleados.js';
import prodcutosRoutes  from './controllers/productos.js';

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

app.use('/orders', ordersRoutes);
app.use('/empleados', empleadosRoutes);
app.use('/productos', prodcutosRoutes);


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
