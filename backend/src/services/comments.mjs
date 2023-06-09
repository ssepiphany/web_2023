import db from '../db/mysql.mjs'


const getAllComments = () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM comment", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const getCommentByBookId = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM comment WHERE book_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const getCommentById = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM comment WHERE comment_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const addComment = (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO comment SET ?", [data], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    };


const updateComment = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE comment SET book_id=?, user_name=?, publication_date=?, rating=?, text=? WHERE comment_id=?", 
                [data.book_id, data.user_name, data.publication_date, data.rating, data.text, data.comment_id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


const deleteComment = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM comment WHERE comment_id=?", [id] , (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


export {
    getAllComments,
    getCommentByBookId,
    getCommentById,
    deleteComment,
    updateComment,
    addComment
}