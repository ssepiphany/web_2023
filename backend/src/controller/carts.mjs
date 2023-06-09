import { getAllCarts, getCartByUserId, getCartById, addCart, updateCart, deleteCart, getCartByUserAndBook } from '../services/carts.mjs';


const getAll = async () => {
    const results = await getAllCarts();
    return results;
}

const getByUserId = async (user_id) => {
    const result = await getCartByUserId(user_id);
    return result;
}

const getById = async (id) => {
    const result = await getCartById(id);
    return result;
}

const add = async (body) => {
    try {
        const existingCart = await getCartByUserAndBook(body.user_id, body.book_id);
        console.log(existingCart)

        if (existingCart.length != 0){
            const cart = {
                cart_id: existingCart[0].cart_id,
                user_id: existingCart[0].user_id,
                book_id: existingCart[0].book_id,
                quantity: parseInt(existingCart[0].quantity)+1   ///if we have enough
            }

            const result = update(cart)
            return 'Order was added to cart'
        }

        const cart = {
            user_id: body.user_id,
            book_id: body.book_id,
            quantity: body.quantity,
        }
    
        const result = await addCart(cart);
        return 'Order was added to cart'
    } catch(err) {
        return "Something went wrong!"
    }
}


const update = async (body) => {
    try {
        const existingCart = await getCartById(body.cart_id);

        if (existingCart.length == 0){
            return 'Cart with id ' + body.cart_id + ' doesn\'t exist!'
        }

        const cart = {
            cart_id: body.cart_id,
            user_id: body.user_id,
            book_id: body.book_id,
            quantity: body.quantity
        }

        const result = await updateCart(cart);
        return 'Cart with id ' + body.cart_id + ' was updates!'
    } catch(err) {
        return 'Something went wrong!'
    }
}

const remove = async (id) => {
    try {
        const existingCart = await getCartById(id);

        if (existingCart.length == 0){
            return 'Cart with id ' + id + ' doesn\'t exist!';
        }

        const result = await deleteCart(id);
        return 'Cart with id ' + id + ' was deleted!';
        
    } catch(err) {
        console.log(err)
        return 'Something went wrong!'
    }
}

export {
    getAll, 
    getByUserId, 
    getById, 
    add, 
    update, 
    remove
}