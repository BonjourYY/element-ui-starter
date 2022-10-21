<template>
  <div class="element-upload">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :multiple="true"
      :limit="limit"
      list-type="text"
      :on-exceed="handleExceed"
      :on-preview="handlePreview"
      :on-change="handleChange"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload">
      <template #trigger>
        <el-button type="primary">点击上传</el-button>
      </template>
      <template #tip>
        <p>只能上传{{ limit }}个文件</p>
      </template>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ElementUpload',
  data() {
    return {
      limit: 3,
      imageUrl: null,
      dialogImageUrl: null,
      dialogVisible: false,
      fileList: [
        { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
      ],
    };
  },
  methods: {
    // 超出上传文件限制个数的钩子
    handleExceed(files, filesList) {
      console.log(this);
      this.$message.warning(`限制选择${this.limit}个文件，你本次选择了${files.length}个文件，总共选择了${files.length + filesList.length}个文件`);
    },
    // 文件预览钩子
    handlePreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 成功移除文件钩子
    handleRemove(file) {
      console.log(`你成功移除了${file.name}`);
    },
    // 上传文件成功钩子
    handleSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$message.success('上传成功');
      console.log('上传成功');
    },
    // 移除文件之前钩子
    beforeRemove(file, fileList) {
      console.log(fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 文件上传成功之前钩子
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return false;
    },
    // 文件改变钩子
    handleChange(file, filesList) {
      this.filesList = filesList.slice(-3);
    },
  },
};
</script>
<!-- css module not support deep selector -->
<!-- <style lang="scss" module>
.avatar-uploader {
  border: 1px solid green;
  ::v-deep .el-upload {
    border: 1px solid red;
  }
}
</style> -->

<!-- 只能使用 scoped -->
<style lang="scss" scoped>
.avatar-uploader {
  ::v-deep .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
    }
  }
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
}
</style>
