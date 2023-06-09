import express from 'express';
import { getAll, getById, getByName, remove, update, add } from '../controller/authors.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getAuthorByName
router.get('/name/:name', async (req, res) => {
    const { name } = req.params;
    const result = await getByName(name);
    res.status(200).json(result);
})

// getAuthorById
router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    const result = await getById(id);
    res.status(200).json(result);
})

// getAllAuthors
router.get('/', async (req, res) => {
    const results = await getAll();
    res.status(200).json(results);
});

// addAuthor
router.post('/', authenticate, async (req, res) => {
    const result = await add(req.body);
    res.status(200).send(result)
});

// updateAuthor
router.put('/', authenticate, async (req, res) => {
    const result = await update(req.body);
    res.status(200).json(result);
});

// deleteAuthor
router.delete('/:id', authenticate, async (req, res) => {
    const result = await remove(req.params.id);
    res.status(200).json(result);
});

export default router;