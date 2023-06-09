import express from 'express';
import { getAll, getByTitle, getById, add, update, remove } from '../controller/books.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();


router.get('/:title', async (req, res) => {
    const { title } = req.params;
    const result = await getByTitle(title);
    res.status(200).json(result);
})


router.get('/', async (req, res) => {
    const results = await getAll();
    res.status(200).json(results);
});


router.post('/', authenticate, async (req, res) => {
    const result = await add(req.body);
    res.status(200).json(result);
});


router.put('/', authenticate, async (req, res) => {
    const result = await update(req.body);
    res.status(200).json(result);
});


router.delete('/:id', authenticate, async (req, res) => {
    const result = await remove(req.params.id);
    res.status(200).json(result);
});

export default router;