//导入jquery包
import $ from 'jquery';//webpack可以将这一句浏览器识别不了的代码转换为兼容性代码
//导入css文件
import './index.css';//导入之后必须进入配置文件中配置loader 否则会报错

//实现隔行变色
$(function () {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'skyblue');
})


//js高级语法 webpack5以下无法打包 现在可以打包
class Person {
    static info = 'person info';
}
consle.log(Person.info);