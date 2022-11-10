<template>
  <div class="element-alert">
    <el-alert type="success" center show-icon effect="dark" close-text="知道了" @close="handleClose('123')">
      <template #default>
        <p>这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……</p>
      </template>
      <template #title>
        <p>success alert text</p>
      </template>
    </el-alert>
  </div>
</template>

<script>
export default {
  name: 'ElementAlert',
  methods: {
    handleClose(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" module></style>
