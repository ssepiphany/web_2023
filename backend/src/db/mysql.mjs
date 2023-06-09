import mysql2 from 'mysql2'

const con = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'210403',
    database:'bookstore'
});

con.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
});

export default con;