import thenFs from 'then-fs';

console.log('A');
async function getAllFiles() {//如果方法中使用了await那么方法声明前面必须加async
    console.log('B');
    const r1 = await thenFs.readFile('./files/a.txt', 'utf-8');//await把Promise对象转换为返回值
    console.log(r1);
    const r2 = await thenFs.readFile('./files/b.txt', 'utf8');
    console.log(r2);
    const r3 = await thenFs.readFile('./files/c.txt', 'utf8');
    console.log(r3);

    console.log('D');

    //在async方法中 第一个await之前的代码会同步执行 之后的代码异步执行
}

getAllFiles();

console.log('C');