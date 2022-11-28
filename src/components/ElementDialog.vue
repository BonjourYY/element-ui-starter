<template>
  <div class="element-dialog">
    <el-button @click="outerVisible = true">点击打开外层 Dialog</el-button>
    <el-dialog @open="handleOpen" @opened="handleOpened" :lock-scroll="false" append-to-body center :visible.sync="outerVisible" title="标题" :before-close="handleClose">
      <template #default>
        <span>外层-Dialog</span>
        <el-dialog :visible.sync="innerVisible" title="内层 Dialog" append-to-body>
          <template #default>
            <span>内层-Dialog</span>
          </template>
          <template #footer> </template>
        </el-dialog>
      </template>
      <template #footer>
        <el-button @click="outerVisible = false">取消</el-button>
        <el-button @click="innerVisible = true">点击打开内层 Dialog</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ElementDialog',
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭')
        .then(() => {
          done();
        })
        .catch(() => {
          console.log('你点击了取消');
        });
    },
    handleOpen() {
      console.log('打开了-1');
    },
    handleOpened() {
      console.log('打开了-2');
    },
  },
};
</script>

<style lang="scss" module></style>
