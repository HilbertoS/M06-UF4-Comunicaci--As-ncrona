import  Express  from "express";
const route = Express.Router();

route.get('/', async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM products");
        const products = result.rows;

        if (products.length > 0) {
            res.json(products);
        }else{
            res.status(404).send('No hay productos')
        }
    }catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).send('Error interno del servidor');
    }
})

export default route
