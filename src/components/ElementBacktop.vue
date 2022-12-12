<template>
  <div class="element-backtop">
    <p>Scroll down see bottom-right button</p>
    <el-backtop :bottom="100">
      <template #default>
        <p :class="$style['backtop-text']">UP</p>
      </template>
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: 'ElementBacktop',
};
</script>

<style lang="scss" module>
.backtop-text {
  font-size: 20px;
  border: 5px solid yellow;
  display: block;
  padding: 10px;
}
</style>
