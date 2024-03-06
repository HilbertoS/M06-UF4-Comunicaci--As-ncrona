import express from 'express';
const router = express.Router();


router.post('/', async (req, res) => {
    const order = req.body;
    const result = await client.query('INSERT INTO orders VALUES (?)', [order]);
    if(result){
        res.status(201).send('order guardado correctamente')
    }else{
        res.status(500).send('Error al guardar el order')
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM orders");
        const orders = result.rows;
        res.json(orders);
    } catch (error) {
        console.error('Error al obtener orders:', error);
        res.status(500).send('Error interno del servidor');
    }
})
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query("SELECT * FROM orders WHERE id = ?", [id]);
        const order = result.rows[0];
        res.json(order);
    } catch (error) {
        console.error('Error al obtener orders:', error);
        res.status(500).send('Error interno del servidor');
    }
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query('DELETE FROM orders WHERE id = ?', [id]);
        if (result.affectedRows > 0) {
            res.json({ message: 'Usuario eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
    }
})
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const order = req.body;
    const result = await client.query('UPDATE orders SET ? WHERE id = ?', [order, id]);
    if (result.affectedRows > 0) {
        res.json({ message: 'order actualizado correctamente' });
    } else {
        res.status(404).json({ message: 'order no encontrado' });
    }
})

export default router;