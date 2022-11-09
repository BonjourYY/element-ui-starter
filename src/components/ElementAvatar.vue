<template>
  <div class="element-avatar">
    <el-avatar shape="circle" :size="100" fit="scale-down" alt="图像无法展示"><img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" /></el-avatar>
  </div>
</template>

<script>
export default {
  name: 'Element-Avatar',
  methods: {
    handleError() {
      return true;
    },
  },
};
</script>

<style lang="scss" module></style>
