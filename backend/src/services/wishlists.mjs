import db from '../db/mysql.mjs'


const getAllWishlists = () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM wishlist", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const getWishlistByUserId = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM wishlist WHERE user_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const getWishlistById = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM wishlist WHERE wishlist_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

  
  const getWishlistByUserAndBook = (user_id, book_id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM wishlist WHERE user_id=? AND book_id=?", 
            [user_id, book_id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const addWishlist = (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO wishlist SET ?", [data], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    };


const updateWishlist = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE wishlist SET user_id=?,book_id=?,quantity=? WHERE wishlist_id=?", 
                [data.user_id, data.book_id, data.quantity, data.wishlist_id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


const deleteWishlist = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM wishlist WHERE wishlist_id=?", [id] , (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


export {
    getAllWishlists,
    getWishlistById,
    getWishlistByUserId,
    deleteWishlist,
    updateWishlist,
    addWishlist,
    getWishlistByUserAndBook
}