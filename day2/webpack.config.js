const path = require('path');
//导入复制文件插件htmlplugin
const HtmlPlugin = require('html-webpack-plugin');
//导入清除dist插件clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//创建clean-webpack-plugin实例对象
const cleanPlugin = new CleanWebpackPlugin();

//创建htmlPlugin实例对象 添加配置对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',//指定要复制的模板
    filename: './index.html'//输出的文件路径
});



module.exports = {
    //webpack的配置文件
    mode: 'development',//可选development或者production 固定写法
    //production生产环境会把代码压缩提高代码执行速度 但是压缩时间更长

    // devtool: 'eval-source-map',//解决SourceMap行号问题，只能在开发环境下使用,既暴露代码也暴露行号
    devtool: 'nosources-source-map',//不暴露源码只暴露源代码行号 比较安全 生产环境使用的属性
    // devtool: 'source-map',//生产环境下既暴露代码也暴露行号  最不安全 不能使用

    //自定义要打包的文件 默认是src下的index.js
    entry: path.join(__dirname, './src/index.js'),

    //自定义输出的文件 默认是dist下的main.js
    output: {
        //表示输出文件的存放路径
        path: path.join(__dirname, './dist'),
        //表示输出文件的名称
        filename: 'js/bundle.js'
    },
    plugins: [htmlPlugin, cleanPlugin],//将插件实例对象挂载
    devServer: {//配置webpack-dev-server
        open: true,//在打包成功后自动打开网页
        host: '127.0.0.1',//打包网页运行的地址
        port: 888//打包网页运行的端口
    },
    module: {//第三方包的配置对象
        rules: [//文件后缀名的匹配规则
            {//定义css文件的loader匹配规则
                test: /\.css$/,//指定匹配的文件后缀
                use: [//定义调用哪些loader
                    //指定多个loader 执行顺序是从后往前调用
                    'style-loader',//两个loader的顺序也不能错
                    'css-loader'
                ]
            },
            //定义less文件的loader匹配规则
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            //配置url地址文件的匹配规则
            //在webpack5中必须options里面加一个 esModule是false
            //然后下面加一句 type: ‘javascript / auto’
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use:
                {//use的这种写法就是loader的另一种配置方法
                    loader: 'url-loader',
                    options: {
                        limit: 22227,//<= 的被base64编码
                        outputPath: 'image',//图片输出文件夹
                        esModule: false
                    }
                }
                ,
                type: 'javascript/auto'
            },
            //在webpack5之前的版本识别js高级语法用的是bable-loader 现在不需要
        ]
    }
}