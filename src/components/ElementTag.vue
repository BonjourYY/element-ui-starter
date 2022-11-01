<template>
  <div class="element-tag">
    <el-tag closable v-for="(tag, index) in tags" :key="`${tag}_${index}`" @click="handleClick" @close="handleClose" effect="plain">{{ tag }}</el-tag>
    <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm"></el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+New Tag</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElementTag',
  data() {
    return {
      tags: ['标签一', '标签二', '标签三'],
      inputValue: '',
      inputVisible: false,
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
      console.log('关闭成功');
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      this.inputValue && this.tags.push(this.inputValue);
      this.inputValue = '';
      this.inputVisible = false;
      console.log('新增成功');
    },
    handleClick() {
      console.log('点击成功');
    },
  },
};
</script>

<style lang="scss" scoped>
.element-tag {
  color: red;
}
.input-new-tag {
  display: inline-block;
  width: 100px;
}
</style>
