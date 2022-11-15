<template>
  <div class="element-message">
    <el-button @click="closeMessage($event)">Click Me Close</el-button>
    <el-button plain @click="clickHandler($event)" :onClose="OnCloseHandler">Click Me</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElementMessage',
  data() {
    return {
      message: null,
    };
  },
  methods: {
    clickHandler() {
      this.message = this.$message({
        dangerouslyUseHTMLString: true,
        showClose: true,
        message: "<div style='color:red'>我是sb</div>",
        type: 'error',
        duration: 3000,
        center: true,
      });
    },
    OnCloseHandler(e) {
      console.log(e);
    },
    closeMessage() {
      this.message.close();
    },
  },
};
</script>

<style lang="scss" module></style>
