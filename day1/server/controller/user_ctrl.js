//查询用户信息
import db from '../db/index.js';

//使用ES6的按需导出将函数导出
export async function getUserInfo(req, res) {
    //利用try{}catch(){} 捕获错误
    try {
        const sql = 'select * from ev_users';
        const [result] = await db.query(sql);//返回的是一个promise实例对象 [result]为解构赋值得到第一个数组的值
        res.send({
            status: 0,
            msg: '获取用户信息成功',
            data: result
        })
    } catch (err) {
        res.send({
            status: 1,
            msg: '获取用户信息失败',
            desc: err.message
        })
    }
}
