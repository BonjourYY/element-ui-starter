<template>
  <div>
    <el-input-number
      v-model="number"
      @change="handleChange"
      label="备选文字"
      placeholde="请输入文字"
      :step="3"
      :step-strictly="true"
      :precision="0"
      size="mini"
      controls-position="right"></el-input-number>
  </div>
</template>

<script>
export default {
  name: 'ElementInputNumber',
  data() {
    return { number: '' };
  },
  methods: {
    handleChange(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" module></style>
