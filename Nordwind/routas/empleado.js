const express = require('express');
const router = express.Router();
const { Client } = require('pg');
require('dotenv').config();

const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
};

const client = new Client(config);
client.connect();

// Ruta para obtener todos los empleados
router.get('/empleados', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM employees');
        const empleados = result.rows;
        res.json(empleados);
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
