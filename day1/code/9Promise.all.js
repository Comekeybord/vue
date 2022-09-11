import thenFs from 'then-fs';

//定义要异步处理的内容数组
const promiseArr = [
    thenFs.readFile('./files/a.txt', 'utf8'),
    thenFs.readFile('./files/b.txt', 'utf8'),
    thenFs.readFile('./files/c.txt', 'utf8')
]

//通过promise.all 执行所有并行的异步任务
//promise.all 是等待所有异步任务处理完成后再从消息队列中一次取出所有消息并执行回调函数
Promise.all(promiseArr)
    .then((result) => {//拿到的数组读取的顺序就是定义时的顺序
        console.log(result);
    })


//通过promise.race 执行所有并行的异步任务
//promise.all 是赛跑机制 只要有一个异步任务处理完成就会取出消息并执行回调函数then
//因为有一个执行完成就取出消息队列  所以只有一个最快的结果 速度也比promise.all快
Promise.race(promiseArr)
    .then((result) => {//拿到的数组读取的顺序就是定义时的顺序
        console.log(result);
    })