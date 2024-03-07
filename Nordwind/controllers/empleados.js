import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM employees");
        const employees = result.rows;
        res.json(employees);
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        res.status(500).send('Error interno del servidor');
    }
});

export default router;
import { client } from '../config.js';