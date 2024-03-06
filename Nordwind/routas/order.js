import express from 'express';
const router = express.Router();
import { createOrder, getOrders, getOrder, deleteOrder, updateOrder } from '../controllers/orders.js';

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:id', getOrder);
router.delete('/:id', deleteOrder)
router.put('/:id', updateOrder)

export default router;