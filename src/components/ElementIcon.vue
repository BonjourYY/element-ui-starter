<template>
  <div>
    <i :class="['el-icon-user', $style.icon]"></i>
    <i :class="['el-icon-plus', $style.icon]"></i>
  </div>
</template>

<script>
export default {
  name: 'ElementIcon',
};
</script>

<style lang="scss" module>
.icon {
  font-size: 38px;
  color: red;
}
</style>
