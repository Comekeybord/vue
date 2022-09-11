//import {成员} from '模块标识符'
import info, { s1, s2 as str2, say } from './3按需导出.js';//按需导入写法
console.log(s1);
console.log(str2);
console.log(say);
console.log(info);//默认导入

// 1.按需导入的成员名必须与按需导出的成员名相同
// 2.按需导入时可以使用 as关键字 进行重命名 重命名之后就只能使用命名的名字
// 3.按需导入可以和默认导入一起使用
