import db from '../db/mysql.mjs'


const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const getUserById = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user WHERE user_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user WHERE email=?", [email], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


const addUser = (data) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO user SET ?", [data], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    };


const updateUser = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE user SET name=?,email=?,phone_number=?,password=?,is_admin=? WHERE user_id=?", 
                [data.name, data.email, data.phone_number, data.password, data.is_admin, data.user_id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM user WHERE user_id=?", [id] , (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


export {
    getAllUsers,
    getUserById,
    getUserByEmail,
    deleteUser,
    updateUser,
    addUser
}