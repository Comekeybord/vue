import fs from 'fs';
function getFile(fpath, encode = 'utf-8') {
    return new Promise(function (resolve, reject) {//创建Promise异步对象
        //resolve为成功的回调函数
        //reject为失败的回调函数
        fs.readFile(fpath, encode, (err, data) => {
            if (err) return reject(err);//值传给失败的函数
            resolve(data);//值传给运行成功的函数
        })
    })
}

getFile('./files/aa.txt')
    .then((result) => { console.log(result); })//这里的成功和错误的回调函数对应Promise对象中的resolve与reject
    .catch((err) => {//通过catch捕获错误
        console.log(err.message);
    })