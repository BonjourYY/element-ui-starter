<template>
  <div class="element-tooltip">
    <el-tooltip placement="left" effect="light" hide-after="3000">
      <template #content>
        <a href="https://www.baidu.com">Baidu.com</a>
      </template>
      <p :class="$style['text']">Hover Content</p>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'ElementTooltip',
};
</script>

<style lang="scss" module>
.text {
  display: block;
  margin: 0 auto;
  width: 100px;
  border: 1px solid saddlebrown;
  padding: 50px;
}
</style>
