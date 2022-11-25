<template>
  <el-row type="flex" justify="center">
    <el-col :span="6" pull="4"><p class="element-layout__text">132</p></el-col>
    <el-col :span="6"><p class="element-layout__text">132</p></el-col>
    <el-col :span="6"><p class="element-layout__text">132</p></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ElementLayout',
};
</script>

<style lang="scss" scoped>
.element-layout {
  &__text {
    border: 1px solid green;
  }
}
</style>
