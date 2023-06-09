import express from 'express'
import { getUserByEmail } from '../services/users.mjs';
import jwt from 'jsonwebtoken';
import config from '../config/config.mjs'

const router = express.Router();

router.post('/login', async (req, res) => {
    const existingUser = await getUserByEmail(req.body.email);

    if (existingUser.length == 0){
        return res.status(401).send('Unauthorised!')
    }

    const token = jwt.sign({sub: existingUser[0].user_id}, config.ACCESS_TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: "1h"
    })

    res.status(200).json({ accessToken: token })
})

export default router;