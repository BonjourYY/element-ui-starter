<template>
  <div class="element-empty">
    <el-empty
      description="描述文字"
      image="https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80">
      <template #description>
        <el-link>sdfsdf</el-link>
      </template>
      <template #default>
        <el-button>返回</el-button>
      </template>
    </el-empty>
  </div>
</template>

<script>
export default {
  name: 'Element-Empty',
};
</script>

<style lang="scss" module></style>
