<template>
  <div class="element-message-box">
    <el-button type="text" @click="open1($event)">点击出现---提示框</el-button>
    <el-button type="text" @click="open2($event)">点击出现---确认框</el-button>
    <el-button type="text" @click="open3($event)">点击出现---输入框</el-button>
    <el-button type="text" @click="open4($event)">点击出现---MessageBox框</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElementMessageBox',
  methods: {
    open1() {
      this.$alert('内容', '标题', { confirmButtonText: 'hahaha' }).then(
        (success) => {
          this.$message(success);
        },
        (error) => {
          this.$message(error);
        }
      );
    },
    open2() {
      this.$confirm('内容', '标题', { type: 'warning' })
        .then((success) => {
          this.$message(success);
        })
        .catch((error) => {
          this.$message(error);
        });
    },
    open3() {
      this.$prompt('内容', '标题', {
        inputPlaceholder: '请输入邮箱',
        inputErrorMessage: '邮箱格式不正确',
        inputValidator(value) {
          return value === '123' ? true : false;
        },
      })
        // 解构赋值，value属性
        .then(({ value }) => {
          console.log(value);
        })
        .catch((error) => {
          this.$message(error);
        });
    },
    open4() {
      this.$msgbox({
        message: '内容',
        title: '标题',
        showCancelButton: true,
        cancelButtonText: '取消',
        distinguishCancelAndClose: true,
        center: true,
        roundButton: true,
        beforeClose: (action, msgbox, done) => {
          if (action === 'confirm') {
            msgbox.confirmButtonLoading = true;
            msgbox.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                msgbox.confirmButtonLoading = false;
              }, 3000);
            }, 3000);
          } else {
            done();
          }
        },
      })
        .then((success) => {
          console.log(success);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" module></style>
