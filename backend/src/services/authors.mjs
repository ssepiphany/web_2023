import db from '../db/mysql.mjs'


const getAllAuthors = () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM author", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


  const getAuthorByName = (name) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM author WHERE name=?", [name], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };


  const getAuthorById = (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM author WHERE author_id=?", [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };

const addAuthor = (data) => {
return new Promise((resolve, reject) => {
    db.query("INSERT INTO author SET ?", [data], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};


// db.query("INSERT INTO author SET ?",data,(err,result)=>{
//     if (err){
//         throw err;
//     }else{
//         return result;
//     }
// });
// return res
// }

// const updateAuthor = async (data) => {
//     // const data = [req.body.name,req.body.email,req.body.phone,req.params.id];
//     db.query("update author set name=?,origin=? where author_id=?",data,(err,result)=>{
//         if (err){
//             throw err;
//         }else{
//             return result;
//         }
//     });
// }


const updateAuthor = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE author SET name=?, origin=? WHERE author_id=?", [data.name, data.origin, data.author_id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


const deleteAuthor = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM author WHERE author_id=?", [id] , (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
    });
};


export {
    getAllAuthors,
    getAuthorById,
    getAuthorByName,
    deleteAuthor,
    updateAuthor,
    addAuthor
}