// app.js
const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos
const pool = new Pool({
  user: 'usuario',
  host: 'localhost',
  database: 'basededatos',
  password: 'contraseña',
  port: 5432,
});

// Ruta para obtener todos los empleados
app.get('/employees', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employees');
    const employees = result.rows;
    res.render('employees', { employees });
  } catch (error) {
    console.error('Error al obtener empleados:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Define más rutas para manejar operaciones CRUD de empleados (insertar, eliminar, actualizar)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
