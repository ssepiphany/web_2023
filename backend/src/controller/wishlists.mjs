import { getAllWishlists, getWishlistByUserId, getWishlistById, addWishlist, updateWishlist, deleteWishlist, getWishlistByUserAndBook } from '../services/wishlists.mjs';


const getAll = async () => {
    const results = await getAllWishlists();
    return results;
}

const getByUserId = async (user_id) => {
    const result = await getWishlistByUserId(user_id);
    return result;
}

const getById = async (id) => {
    const result = await getWishlistById(id);
    return result;
}

const add = async (body) => {
    try {
        const existingWishlist = await getWishlistByUserAndBook(body.user_id, body.book_id);

        if (existingWishlist.length != 0){
            const wl = {
                wishlist_id: existingWishlist[0].wishlist_id,
                user_id: existingWishlist[0].user_id,
                book_id: existingWishlist[0].book_id,
                quantity: parseInt(existingWishlist[0].quantity)+1
            }

            const result = update(wl)
            return 'Order was added to wishlist'
        }

        const wl = {
            user_id: body.user_id,
            book_id: body.book_id,
            quantity: body.quantity,
        }
    
        const result = await addWishlist(wl);
        return 'Order was added to wishlist'
    } catch(err) {
        return "Something went wrong!"
    }
}


const update = async (body) => {
    try {
        const existingWishlist = await getWishlistById(body.wishlist_id);

        if (existingWishlist.length == 0){
            return 'Wishlist with id ' + body.wishlist_id + ' doesn\'t exist!'
        }

        const wl = {
            wishlist_id: body.wishlist_id,
            user_id: body.user_id,
            book_id: body.book_id,
            quantity: body.quantity
        }

        const result = await updateWishlist(wl);
        return 'Wishlist with id ' + body.wishlist_id + ' was updates!'
    } catch(err) {
        return 'Something went wrong!'
    }
}

const remove = async (id) => {
    try {
        const existingWishlist = await getWishlistById(id);

        if (existingWishlist.length == 0){
            return 'Wishlist with id ' + id + ' doesn\'t exist!';
        }

        const result = await deleteWishlist(id);
        return 'Wishlist with id ' + id + ' was deleted!';
        
    } catch(err) {
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