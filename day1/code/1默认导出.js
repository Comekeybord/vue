let n1 = 10;
let n2 = 20;//没有被挂载，所以不会被共享
function show() {

}

//export default只能使用一次，否则会报错
export default {//默认导出
    n1,
    show
}

// export default {
//     n2
// }