import { getAllComments, getCommentByBookId, getCommentById, deleteComment, updateComment, addComment } from '../services/comments.mjs';


const getAll = async () => {
    const results = await getAllComments();
    return results;
}

const getByBookId = async (book_id) => {
    const result = await getCommentByBookId(book_id);
    return result;
}

const getById = async (id) => {
    const result = await getCommentById(id);
    return result;
}

const add = async (body) => {
    try {
        const comment = {
            book_id: body.book_id,
            user_name: body.user_name,
            publication_date: body.publication_date,
            rating: body.rating,
            text: body.text
        }

        const result = await addComment(comment);
        return 'Comment was added!'
    } catch(err) {
        return "Something went wrong!"
    }
}


const update = async (body) => {
    try {
        const existingComment = await getCommentById(body.comment_id);

        if (existingComment.length == 0){
            return 'Comment doesn\'t exist!';
        }

        const comment = {
            comment_id: body.comment_id,
            book_id: body.book_id,
            user_name: body.user_name,
            publication_date: body.publication_date,
            rating: body.rating,
            text: body.text
        }

        const result = await updateComment(comment);

        return 'Comment was updated!'
    } catch(err) {
        return "Something went wrong!"
    }
}

const remove = async (id) => {
    try {
        const existingComment = await getCommentById(id);

        if (existingComment.length == 0){
            return 'Comment doesn\'t exist!';
        }

        const result = await deleteComment(id);

        return 'Comment was deleted!'
    } catch(err) {
        return 'Something went wrong!'
    }
}

export {
    getAll,
    getByBookId,
    getById,
    remove,
    update,
    add
}