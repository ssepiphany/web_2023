import { getAllAuthors, getAuthorById, getAuthorByName, deleteAuthor, updateAuthor, addAuthor } from '../services/authors.mjs';


const getAll = async () => {
    const results = await getAllAuthors();
    return results;
}

const getByName = async (name) => {
    const newName = name.replace("-", " ");
    const result = await getAuthorByName(newName);
    return result;
}

const getById = async (id) => {
    const result = await getAuthorById(id);
    return result;
}

const add = async (body) => {
    try {
        const existingAuthor = await getAuthorByName(body.name);
        if (existingAuthor.length != 0){
            return 'Author ' + body.name + ' already exists!'
        }

        const author = {
            name: body.name,
            origin: body.origin
        }

        const result = await addAuthor(author);
        return 'Author ' + body.name + ' was added!'
    } catch(err) {
        return "Something went wrong!"
    }
}


const update = async (body) => {
    try {
        const existingAuthor = await getAuthorById(body.author_id);

        if (existingAuthor.length == 0){
            return 'Author with id ' + body.author_id + ' doesn\'t exist!'
        }

        const author = {
            author_id: body.author_id,
            name: body.name,
            origin: body.origin
        }

        const result = await updateAuthor(author);
        return 'Author with id ' + body.author_id + ' was updated!';
    } catch(err) {
        return 'Something went wrong!'
    }
}

const remove = async (id) => {
    try {
        const existingAuthor = await getAuthorById(id);

        if (existingAuthor.length == 0){
            return 'Author with id ' + id + ' doesn\'t exist!'
        }

        const result = await deleteAuthor(id);
        return 'Author with id ' + id + ' was deleted!'
    } catch(err) {
        return 'Something went wrong!'
    }
}

export {
    getAll,
    getById,
    getByName,
    remove,
    update,
    add
}