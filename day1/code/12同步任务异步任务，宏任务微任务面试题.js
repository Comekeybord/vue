//案例一
// setTimeout(() => {//此为异步任务中的宏任务
//     console.log('1');
// }, 0);

// new Promise(function (resolve) {//此为同步任务，会直接执行
//     console.log('2');
//     resolve();
// }).then(function () {//此为异步任务微任务隶属于上面这个同步任务之下,当同步任务执行完后会先从任务队列中拿出隶属于上一个同步任务的回调函数执行，优先性最高
//     console.log('3');
// })

// console.log(
//     '4'
// );

// 案例一总结:先执行同步任务 再执行微任务 再执行宏任务


//案例二
console.log('1');//1.同步任务 直接执行
setTimeout(function () {//宏任务，加入宏任务队列排序
    console.log('2');//同步任务 直接执行
    new Promise(function (resolve) {//同步任务 直接执行
        console.log('3');
        resolve();
    }).then(function () {//微任务，加入微任务队列排序
        console.log('4');
    })
})

new Promise(function (resolve) {//2.同步任务直接执行
    console.log('5');
    resolve();
}).then(function () {//3.微任务，加入微任务队列排序
    console.log('6');
})

setTimeout(function () {//宏任务，加入宏任务队列排序
    console.log('7');
    new Promise(function (resolve) {//同步任务直接执行
        console.log('8');
        resolve();
    }).then(function () {//微任务，加入微任务队列排序
        console.log('9');
    })
})

// 案例二总结：宏任务队列有先后顺序 156234789
//微任务执行完才能执行宏任务
