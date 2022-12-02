<template>
  <div class="element-popconfirm">
    <el-popconfirm
      title="这是一段内容，确定删除吗？"
      cancel-button-text="下次一定"
      confirm-button-text="确定"
      icon="el-icon-search"
      @confirm="handle($event, 'confirm')"
      @cancel="handle($event, 'cancel')">
      <template #reference>
        <el-button type="text">删除</el-button>
      </template>
    </el-popconfirm>
  </div>
</template>

<script>
export default {
  name: 'ElementPopconfirm',
  methods: {
    handle(e, a) {
      console.log(e, a);
      this.$message.success('success');
    },
  },
};
</script>

<style lang="scss" module></style>
