<template>
  <div class="element-drawer">
    <el-drawer :visible.sync="visible1" direction="rtl" size="50%">
      <template #title>
        <p>我是标题-1</p>
      </template>
      <template #default>
        <p>我是内容-1</p>
        <el-drawer :visible.sync="visible2" direction="rtl" :append-to-body="true" :before-close="handleClose">
          <template #title>
            <p>我是标题-2</p>
          </template>
          <template #default>
            <p>我是内容-2</p>
          </template>
        </el-drawer>
      </template>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'ElementDrawer',
  data() {
    return {
      visible1: true,
      visible2: true,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('是否确认关闭')
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" module></style>
