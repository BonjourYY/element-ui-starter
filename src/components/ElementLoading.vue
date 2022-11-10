<template>
  <div class="element-loading">
    <el-table :data="tableData">
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
    </el-table>
    <el-button type="success" @click="handleLoading">Loading Animation</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElementLoading',
  data() {
    return {
      loading: true,
      tableData: [
        { date: '2022.11.11', name: 'Jackfan', age: 24 },
        { date: '2022.11.11', name: 'Jackfan', age: 24 },
        { date: '2022.11.11', name: 'Jackfan', age: 24 },
      ],
    };
  },
  methods: {
    handleLoading() {
      const loading = this.$loading({
        text: '正在加载中',
        spinner: 'el-icon-loading',
        lock: true,
        fullscreen: false,
        target: '.element-loading',
        // 是否给body添加类名
        body: false,
        background: 'rgba(132,32,13,.5)',
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
  },
};
</script>

<style lang="scss" module></style>
