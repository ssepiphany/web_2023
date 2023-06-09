import express from 'express';
import { getAll, getByUserId, getById, add, update, remove } from '../controller/wishlists.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getWishlistByUserId
router.get('/user-id/:user_id', async (req, res) => {
    const { user_id } = req.params;
    const result = await getByUserId(user_id);
    res.status(200).json(result);
})

// getWishlistById
router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    const result = await getById(id);
    res.status(200).json(result);
})

// getAllWishlists
router.get('/', async (req, res) => {
    const results = await getAll();
    res.status(200).json(results);
});

// addWishlist
router.post('/', authenticate, async (req, res) => {
    const result = await add(req.body);
    res.status(200).json(result);
});

// updateWishlist
router.put('/', authenticate, async (req, res) => {
    const result = await update(req.body);
    res.status(200).json(result);
});

// deleteWishlist
router.delete('/:id', async (req, res) => {
    const result = await remove(req.params.id);
    res.status(200).json(result);
});

export default router;