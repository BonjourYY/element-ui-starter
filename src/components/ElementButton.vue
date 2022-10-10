<template>
  <div class="element-button">
    <el-button-group>
      <el-button type="primary">默认按钮</el-button>
      <el-button type="primary" plain>朴素按钮</el-button>
    </el-button-group>
    <el-button type="primary" native-type="submit">默认按钮</el-button>
    <el-button type="primary" plain autofocus>朴素按钮</el-button>
    <el-button type="primary" icon="el-icon-search" round><p class="el-icon-search"></p>圆角按钮</el-button>
    <el-button type="primary" size="mini" circle icon="el-icon-search"></el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElementButton',
};
</script>

<style></style>
