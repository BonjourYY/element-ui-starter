<template>
  
    <el-row :gutter="100">
      <el-col :span="8"><p class="element-layout__text">132</p></el-col>
      <el-col :span="8"><p class="element-layout__text">132</p></el-col>
      <el-col :span="8"><p class="element-layout__text">132</p></el-col>
    </el-row>

</template>

<script>
export default {
  name: "ElementLayout",
};
</script>

<style lang="scss" scoped>
.element-layout {
  &__text {
    border: 1px solid green;
  }
}
</style>