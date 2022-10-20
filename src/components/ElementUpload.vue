<template>
  <div class="element-upload">
    <el-upload
      :limit="limit"
      :on-exceed="handleExceed"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="filesList"
      multiple
      action="https://jsonplaceholder.typicode.com/posts/"
      :before-remove="beforeRemove">
      <el-button type="primary">点击上传</el-button>
      <template #tip>
        <p>只能上传{{ limit }}个文件</p>
      </template>
    </el-upload>
    <!-- 上传头像 -->
    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/">
      <img v-if="imageUrl" :src="imageUrl" alt="image" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'ElementUpload',
  data() {
    return {
      limit: 3,
      imageUrl: null,
      filesList: [
        { name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
      ],
    };
  },
  methods: {
    handleExceed(files, filesList) {
      // files:选择的文件
      // filesList:已选择的文件
      console.log(this);
      this.$message.warning(`限制选择${this.limit}个文件，你本次选择了${files.length}个文件，总共选择了${files.length + filesList.length}个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleRemove(file) {
      console.log(`你成功移除了${file.name}`);
    },
    handlePreview() {
      console.log(`你成功预览了`);
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
