<template>
  <div class="element-checkbox">
    <el-checkbox label="备选项A" v-model="isChecked" @change="fn"> </el-checkbox>
    <span>{{ isChecked }}</span>
  </div>
</template>

<script>
export default {
  name: 'ElementCheckBox',
  data() {
    return {
      isChecked: [],
    };
  },
  methods: {
    fn(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" module></style>
