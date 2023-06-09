import express from 'express';
import { getAll, getByBookId, getById, remove, update, add } from '../controller/comments.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getCommentByBookId
router.get('/book-id/:book_id', async (req, res) => {
    const { book_id } = req.params;
    const result = await getByBookId(book_id);
    res.status(200).json(result);
})

// getCommentById
router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    const result = await getById(id);
    res.status(200).json(result);
})

// getAllComments
router.get('/', async (req, res) => {
    const results = await getAll();
    res.status(200).json(results);
});

// addComment
router.post('/', async (req, res) => {
    const result = await add(req.body);
    res.status(200).json(result);
});

// updateComent
router.put('/', async (req, res) => {
    const result = await update(req.body);
    res.status(200).json(result);
});

// deleteComment
router.delete('/:id', async (req, res) => {
    const result = await remove(req.params.id);
    res.status(200).json(result);
});

export default router;