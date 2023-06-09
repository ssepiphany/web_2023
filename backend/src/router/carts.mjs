import express from 'express';
import { getAll, getByUserId, getById, add, update, remove } from '../controller/carts.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getCartBtyUserId
router.get('/user-id/:user_id', authenticate, async (req, res) => {
    const { user_id } = req.params;
    const result = await getByUserId(user_id);
    res.status(200).json(result);
})

// getCartById
router.get('/id/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const result = await getById(id);
    res.status(200).json(result);
})

// getAllCarts
router.get('/', authenticate, async (req, res) => {
    const results = await getAll();
    res.status(200).json(results);
});

// addCart
router.post('/', authenticate, async (req, res) => {
    const result = await add(req.body);
    res.status(200).json(result);
});

// updateCart
router.put('/', authenticate, async (req, res) => {
    const result = await update(req.body);
    res.status(200).json(result);
});

// deleteCart
router.delete('/:id', authenticate, async (req, res) => {
    const result = await remove(req.params.id);
    res.status(200).json(result);
});

export default router;