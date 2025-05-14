const mysql2 =require("mysql2/promise")

const connection = mysql2.createPool(
    {
        host:"localhost",
        database:"cpms",
        user:"root",
        password:""
    }
);

module.exports = connection;


