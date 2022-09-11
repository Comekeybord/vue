<template>
  <div class="app">
    <h1>App 根组件</h1>
    <hr />
    <my-test>
      <!-- 通过v-slot:default="scope" 接收数据 -->
      <!-- scope包含传递过来的所有对象数据 -->
      <!-- 可以直接通过解构赋值获得传递的值 -->
      <template #default="{ msg, info }">
        <p>{{ info }}</p>
        <p>{{ msg.state }}</p>
      </template>
    </my-test>
    <hr />
    <my-table>
      <template #default="{ item }">
        <td scope="row">{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                name=""
                id=""
                value="checkedValue"
                :checked="item.state"
              />
            </label>
          </div>
        </td>
      </template>
    </my-table>
  </div>
</template>
    </my-table>
  </div>
</template>

<script>
import MyTable from "./MyTable.vue";
import MyTest from "./MyTest.vue";
export default {
  name: "MyApp",
  components: {
    MyTable,
    MyTest,
  },
};
</script>

<style>
</style>