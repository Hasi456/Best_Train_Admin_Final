
const mysql=require('mysql');

const conn=mysql.createConnection({
   /* host:"localhost",
    user:"root",
    password:"",
    database:"besttrain"*/

    host:"sql12.freemysqlhosting.net",
    user:"sql12323335",
    password:"QBNlMV7bez",
    database:"sql12323335"
    
});

conn.connect(function(err){

    if(err)throw err;
    console.log("Connected");


});

module.exports=conn;
