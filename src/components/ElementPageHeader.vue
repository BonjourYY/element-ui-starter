<template>
  <div class="element-page-header">
    <el-page-header @back="handleBack">
      <template #title> 标题1 </template>
      <template #content> 内容1 </template>
    </el-page-header>
  </div>
</template>

<script>
export default {
  name: 'ElementPageHeader',
  methods: {
    handleBack() {
      console.log('go back');
    },
  },
};
</script>

<style lang="scss" module></style>
