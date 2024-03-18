import express from 'express';
import { client } from '../config.js';

const router = express.Router();

//Obtener todo los emppleados
router.get('/', async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM employees ORDER BY employee_id");
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


// Insercion en la base de datos
router.post('/insertar-empleado', async (req, res) => {
    const { employee_id, last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path } = req.body;
    try {
        await client.query('INSERT INTO employees (employee_id, last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
            [employee_id, last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path]);

        res.json({ message: 'Empleado insertado exitosamente' });
    } catch (err) {
        console.error('Error al insertar empleado:', err);
        res.status(500).json({ error: 'Error al insertar empleado' });
    }
});

// Eliminar un empleado por su ID
router.delete('/:id', async (req, res) => {
    const empleadoId = req.params.id;
    try {
        const result = await client.query('DELETE FROM employees WHERE employee_id = $1', [empleadoId]);
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        res.json({ message: 'Empleado eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar empleado:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


// Modificar un empleado por su ID
router.put('/:id', async (req, res) => {
    const empleadoId = req.params.id;
    const { last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path } = req.body;

    try {
        const result = await client.query(
            `UPDATE employees 
             SET last_name = $1, first_name = $2, title = $3, region = $4, postal_code = $5, home_phone = $6, address = $7, extension = $8, reports_to = $9, photo_path = $10 
             WHERE employee_id = $11`,  
            [last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path, empleadoId]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.json({ message: 'Empleado modificado correctamente' });
    } catch (error) {
        console.error('Error al modificar empleado:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

export default router;
