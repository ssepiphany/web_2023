import express from 'express';
import { getAll, getById, getByEmail, remove, update, add } from '../controller/users.mjs';
import { authenticate } from '../middleware/authenticate.mjs';

const router = express.Router();

// getUserByEmail
router.get('/email/:email', async (req, res) => {
    const { email } = req.params;
    const result = await getByEmail(email);
    res.status(200).json(result);
})

// getUserById
router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    const result = await getById(id);
    res.status(200).json(result);
})

// getAllUsers
router.get('/', async (req, res) => {
    const results = await getAll();
    res.status(200).json(results);
});

// addUser
router.post('/', async (req, res) => {
    const result = await add(req.body);
    res.status(200).json(result);
});

// updateUser
router.put('/', authenticate, async (req, res) => {
    const result = await update(req.body);
    res.status(200).json(result);
});

// deleteuser
router.delete('/:id', authenticate, async (req, res) => {
    const result = await remove(req.params.id);
    res.status(200).json(result);
});

export default router;