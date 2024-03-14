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

//Ruta para manejar el insert de los usuarios 
router.post('/', async (req, res) => {
  const { last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path } = req.body;

  try {
      // Obtener todos los empleados excepto el que se está in
       result = await client.query('SELECT * FROM employees WHERE employee_id != $1', [reports_to]);
      const employees = result.rows;

      // Verificar si el ID del reporte seleccionado existe en la lista de empleados disponibles
      const isValidReportTo = employees.some(employee => employee.employee_id === reports_to);

      if (!isValidReportTo) {
          return res.status(400).json({ error: 'El empleado seleccionado como reporte no es válido' });
      }

      const client = await pool.connect();
      const result = await client.query('INSERT INTO employees (last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
      [last_name, first_name, title, region, postal_code, home_phone, address, extension, reports_to, photo_path]);
      client.release();
      res.json({ message: 'Empleado insertado exitosamente' });
  } catch (err) {
      console.error('Error al insertar empleado:', err);
      res.status(500).json({ error: 'Error al insertar empleado' });
  }
});
export default router;
import { client } from '../config.js';