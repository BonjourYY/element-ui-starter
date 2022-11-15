<template>
  <div class="element-notification">
    <el-button @click="open">Notification</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElementNotification',
  methods: {
    open() {
      this.$notify({ title: '标题', message: '内容', duration: 2000, type: 'success', position: 'top-left', offset: 200, showClose: true });
    },
  },
};
</script>

<style lang="scss" module></style>
