<template>
  <div>
    <el-switch
      v-model="value"
      active-color="#409eff"
      inactive-color="#dcdfe6"
      active-text="true"
      inactive-text="false"
      active-value="100"
      inactive-value="0"
      active-icon-class="el-icon-search"
      inactive-icon-class="el-icon-edit">
    </el-switch>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'ElementSwitch',
  data() {
    return { value: '100' };
  },
};
</script>

<style lang="scss" module></style>
