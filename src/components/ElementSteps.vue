<template>
  <div class="element-steps">
    <el-steps :active="active" finish-status="success" process-status="process" align-center direction="vertical">
      <el-step title="步骤1" description="描述性文字" icon="el-icon-search"></el-step>
      <el-step title="步骤2" description="描述性文字" icon="el-icon-search"></el-step>
      <el-step title="步骤3" description="描述性文字" icon="el-icon-search" status="error"></el-step>
    </el-steps>
    <el-button @click="handleClick">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'ElementSteps',
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    handleClick() {
      this.active++;
      if (this.active > 3) {
        this.active = 1;
      }
    },
  },
};
</script>

<style lang="scss" module></style>
