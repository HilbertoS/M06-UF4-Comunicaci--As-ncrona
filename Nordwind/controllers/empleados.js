import express from 'express';
import { client } from '../config.js';

const router = express.Router();

//Obtener todo los emppleados
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

//Obtener los empleados con determinada ID
router.get('/:id', async (req, res) => {
    const empleadoId = req.params.id;

    try {
        const result = await client.query('SELECT * FROM employees WHERE employee_id = $1', [empleadoId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        const empleado = result.rows[0];
        res.json(empleado);
    } catch (error) {
        console.error('Error al obtener información del empleado:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


//Insercion en la base de datos
router.post('insertar-empleado', async (req, res) => {
    const { last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path } = req.body;

    try {
        // Obtener todos los empleados excepto el que se está insertando
        const result = await client.query('SELECT * FROM employees WHERE employee_id != $1', [reports_to]);
        const employees = result.rows;

        // Verificar si el ID del reporte seleccionado existe en la lista de empleados disponibles
        const isValidReportTo = employees.some(employee => employee.employee_id === reports_to);

        if (!isValidReportTo) {
            return res.status(400).json({ error: 'El empleado seleccionado como reporte no es válido' });
        }

        // Utilizar pool en lugar de client
        const client = await pool.connect();
        await client.query('INSERT INTO employees (last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
            [last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path]);
        client.release();
        res.json({ message: 'Empleado insertado exitosamente' });
    } catch (err) {
        console.error('Error al insertar empleado:', err);
        res.status(500).json({ error: 'Error al insertar empleado' });
    }
});


//Modificación en la base de datos 
router.get('info/:id', async (req, res) => {
    const empleadoId = req.params.id;

    try {
        const result = await client.query('SELECT * FROM employees WHERE employee_id = $1', [empleadoId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        const empleado = result.rows[0];
        res.json(empleado);
    } catch (error) {
        console.error('Error al obtener información del empleado:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
export default router;
