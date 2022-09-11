<template>
  <div>
    <!-- 通过v-bind 和 表达式 动态绑定class 开关倾斜 -->
    <!-- <h3 class="thin" :class="isItalic ? '' : 'italic'">MyStyle 组件</h3> -->
    <!-- 可以用数组给class绑定多个类名 -->
    <!-- <h3 -->
    <!-- class="thin" -->
    <!-- :class="[isItalic ? '' : 'italic', isDelete ? '' : 'delete']" -->
    <!-- > -->
    <!-- MyStyle 组件 -->
    <!-- </h3> -->
    <!-- <button @click="isItalic = !isItalic">Toggle Italic</button>
    <button @click="isDelete = !isDelete">Toggle Delete</button> -->

    <!-- 用对象的方式给class绑定类名 -->
    <h3 class="thin" :class="classObj">MyStyle 组件</h3>
    <!-- 通过点击按钮切换classObj的真值 -->
    <button @click="classObj.italic = !classObj.italic">Toggle Italic</button>
    <button @click="classObj.delete = !classObj.delete">Toggle Delete</button>
    <hr />

    <!-- 用对象绑定内联样式style -->
    <div
      :style="{
        color: active,
        fontSize: fsize + 'px',
        //如果想写style中的名称 则必须加单引号
        // backgroundColor: bgcolor,
        'background-color': bgcolor,
      }"
    >
      黑马程序员
    </div>
    <button @click="fsize += 1">字号 +1</button>
    <button @click="fsize -= 1">字号 -1</button>
  </div>
</template>

<script>
export default {
  name: "MyStyle",
  data() {
    return {
      isItalic: true,
      isDelete: true,
      classObj: {
        // 以键值对的方式添加类名
        italic: true,
        delete: true,
      },
      //高亮文字
      active: "red",
      //字体大小
      fsize: 30,
      //背景颜色
      bgcolor: "pink",
    };
  },
};
</script>

<style lang="less">
// 字体变细
.thin {
  font-weight: 200;
}

// 倾斜字体
.italic {
  font-style: italic;
}

.delete {
  text-decoration: line-through;
}
</style>
