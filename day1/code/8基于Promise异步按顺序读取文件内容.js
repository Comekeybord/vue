import thenFs from 'then-fs';

thenFs
    .readFile('./files/aa.txt', 'utf-8')
    .catch((err) => {//catch原型对象的方法捕获错误 放在前面如果前面发生错误后面还可以继续执行
        console.log(err.message);//捕获第一行发生的错误
    })
    .then((r1) => {
        console.log(r1);
        return thenFs.readFile('./files/b.txt', 'utf-8');
    })
    .then((r2) => {
        console.log(r2);
        return thenFs.readFile('./files/c.txt', 'utf-8');
    })
    .then((r3) => {
        console.log(r3);
    })
    .catch((err) => {//catch原型对象的方法捕获错误
        console.log(err.message);//捕获第一行发生的错误
    })