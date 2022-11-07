<template>
  <div class="element-pagination">
    <el-pagination
      hide-on-single-page
      layout="sizes,prev,pager, next,->,slot,total,jumper"
      :total="1000"
      :page-sizes="[100, 200, 300, 400, 1000]"
      background
      :next-text="`${text}`"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @next-click="handleNextClick">
      <span>我是自定义内筒</span>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'ElementPagination',
  data() {
    return {
      text: '下一页（新闻周报）',
    };
  },
  methods: {
    // 每页展示个数发生改变
    handleSizeChange(val) {
      console.log(`当前页的个数为${val}`);
    },
    // 页码发生改变
    handleCurrentChange(val) {
      console.log(`当前页码为:${val}`);
    },
    handleNextClick(val) {
      console.log(`点击之前的页${val}`);
    },
  },
};
</script>

<style lang="scss" module></style>
