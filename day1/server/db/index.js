import mysql from 'mysql2';
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    database: 'my_db_1',
    user: 'root',
    password: 'admin666'
})

//默认导出
export default pool.promise();//以promise的方式导出，可以以promise的方法执行异步请求