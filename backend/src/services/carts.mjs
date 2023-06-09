import db from '../db/mysql.mjs'


const getAllCarts = () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM cart", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const getCartByUserId = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM cart WHERE user_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const getCartById = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM cart WHERE cart_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

  
  const getCartByUserAndBook = (user_id, book_id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM cart WHERE user_id=? AND book_id=?", 
            [user_id, book_id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const addCart = (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO cart SET ?", [data], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    };


const updateCart = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE cart SET user_id=?,book_id=?,quantity=? WHERE cart_id=?", 
                [data.user_id, data.book_id, data.quantity, data.cart_id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


const deleteCart = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM cart WHERE cart_id=?", [id] , (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


export {
    getAllCarts,
    getCartById,
    getCartByUserId,
    deleteCart,
    updateCart,
    addCart,
    getCartByUserAndBook
}