export const createOrder = async (req, res) => {
    const order = req.body;
    const result = await client.query('INSERT INTO orders VALUES (?)', [order]);
    if(result){
        res.status(201).send('order guardado correctamente')
    }else{
        res.status(500).send('Error al guardar el order')
    }
}
export const getOrders = async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM orders");
        const orders = result.rows;
        res.json(orders);
    } catch (error) {
        console.error('Error al obtener orders:', error);
        res.status(500).send('Error interno del servidor');
    }
}
export const getOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await client.query("SELECT * FROM orders WHERE id = ?", [id]);
        const order = result.rows[0];
        res.json(order);
    } catch (error) {
        console.error('Error al obtener orders:', error);
        res.status(500).send('Error interno del servidor');
    }
}
export const deleteOrder = async (req, res) => {
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
}
export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const order = req.body;
    const result = await client.query('UPDATE orders SET ? WHERE id = ?', [order, id]);
    if (result.affectedRows > 0) {
        res.json({ message: 'order actualizado correctamente' });
    } else {
        res.status(404).json({ message: 'order no encontrado' });
    }
}