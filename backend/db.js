import mysql from 'mysql2/promise.js'
export default mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portfoliodb',
    port: '3307'
})
