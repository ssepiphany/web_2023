import db from '../db/mysql.mjs'


const getAllBooks = () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM book", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

//getpage

const getBookByTitle = (title) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM book WHERE title=?", [title], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const getBookById = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM book WHERE book_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const addBook = (data) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO book SET ?", [data], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const updateBook = (data) => {
    return new Promise((resolve, reject) => {
      db.query("UPDATE book SET title=?,author_id=?,price=?,language=?,genre=?,rating=?,arrival_date=?,release_year=?,publisher=?,number_left=?,abstract=?,page_number=? WHERE book_id=?", 
            [data.title, data.author_id, data.price, data.language, data.genre, data.rating, data.arrival_date, data.release_year, data.publisher, data.number_left, data.abstract, data.page_number, data.book_id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const deleteBook = (id) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM book WHERE book_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


export {
    getAllBooks,
    getBookById,
    getBookByTitle,
    deleteBook,
    updateBook,
    addBook
}