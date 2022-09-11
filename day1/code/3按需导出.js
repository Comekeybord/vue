//export 成员
export let s1 = 'aaa';//按需导出写法
export let s2 = 'ccc';
export function say() { };

export default {
    a: 20
}


// 1.每个模块可以使用多次按需导出
// 2.默认导出和按需导出可以一起使用
