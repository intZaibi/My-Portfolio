import mysql from 'mysql2/promise.js'
export default mysql.createPool({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12728250',
    password: '',
    database: 'sql12728250',
    port: '3306'
})
