const mysql = require('mysql');

//set database connection credentials
const config = {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'api',
};

//create a MySQL pool
const pool = mysql.createPool(config);

//export the pool
module.exports = pool;