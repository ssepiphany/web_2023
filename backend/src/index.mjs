import express from 'express';
import bodyParser from 'body-parser';

import authorRouter from './router/authors.mjs'
import bookRouter from './router/books.mjs'
import cartRouter from './router/carts.mjs'
import commentRouter from './router/comments.mjs'
import userRouter from './router/users.mjs'
import wishlistRouter from './router/wishlists.mjs'
import authRouter from './router/auth.mjs'

const app = express()
const port = 3000

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/authors', authorRouter);
app.use('/books', bookRouter)
app.use('/carts', cartRouter);
app.use('/comments', commentRouter);
app.use('/users', userRouter);
app.use('/wishlists', wishlistRouter)

app.use('/auth', authRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})