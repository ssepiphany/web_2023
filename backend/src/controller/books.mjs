import { getAllBooks, getBookByTitle, getBookById, addBook, updateBook, deleteBook } from '../services/books.mjs';


const getAll = async () => {
    const results = await getAllBooks();
    return results;
}

const getByTitle = async (title) => {
    const newTitle = title.replace("-", " ");
    const result = await getBookByTitle(newTitle);
    return result;
}

const getById = async (id) => {
    const result = await getBookById(id);
    return result;
}

const add = async (body) => {
    try {
        const existingBook = await getBookByTitle(body.title);

        if (existingBook.length != 0){
            return 'Book \"' + body.title + '\" already exists!'
        }

        const book = {
            title: body.title,
            author_id: body.author_id,
            price: body.price,
            language: body.language,
            genre: body.genre,
            rating: body.rating,
            arrival_date: body.arrival_date,
            release_year: body.release_year,
            publisher: body.publisher,
            number_left: body.number_left,
            abstract: body.abstract,
            page_number: body.page_number
        }

        const result = await addBook(book);
        return 'Book \"' + body.title + '\" was added!'
    } catch(err) {
        return "Something went wrong!"
    }
}


const update = async (body) => {
    try {
        const existingBook = await getBookById(body.book_id);

        if (existingBook.length == 0){
            return 'Book \"' + body.title + '\" doesn\'t exist!';
        }

        const book = {
            book_id: body.book_id,
            title: body.title,
            author_id: body.author_id,
            price: body.price,
            language: body.language,
            genre: body.genre,
            rating: body.rating,
            arrival_date: body.arrival_date,
            release_year: body.release_year,
            publisher: body.publisher,
            number_left: body.number_left,
            abstract: body.abstract,
            page_number: body.page_number
        }

        const result = await updateBook(book);

        return 'Book \"' + body.title + '\" was updated!';
    } catch(err) {
        return "Something went wrong!"
    }
}

const remove = async (id) => {
    try {
        const existingBook = await getBookById(id);

        if (existingBook.length == 0){
            return 'Book with id' + id + ' doesn\'t exist!';
        }

        const result = await deleteBook(id);
        return 'Book with id ' + id + ' was deleted!';
        
    } catch(err) {
        return 'Something went wrong!'
    }
}

export {
    getAll,
    getByTitle,
    getById,
    add,
    update,
    remove
}