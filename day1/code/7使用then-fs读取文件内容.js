import thenFs from 'then-fs';

thenFs.readFile('./files/a.txt', 'utf-8').then((r1) => {
    console.log(r1);
})
thenFs.readFile('./files/b.txt', 'utf-8').then((r2) => {
    console.log(r2);
})
thenFs.readFile('./files/c.txt', 'utf-8').then((r3) => {
    console.log(r3);
})