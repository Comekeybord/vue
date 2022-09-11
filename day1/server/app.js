import express from 'express';
const app = express();



//注册查询用户路由
import getUserInforouter from './router/user_router.js';
app.use('/api', getUserInforouter);


//定义错误级别中间件
app.use((err, req, res, next) => {
    if (err) return console.log(err.message);
    next();
})

app.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})