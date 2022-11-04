<template>
  <div class="element-progress">
    <el-progress stroke-linecap="square" type="dashboard" :percentage="percentage" :stroke-width="5" :width="500" :status="statusMethod" :format="format" :color="colorMethods"></el-progress>
    <el-button-group>
      <el-button icon="el-icon-minus" size="small" @click="decrease">减</el-button>
      <el-button icon="el-icon-plus" size="small" @click="increase">加</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'ElementProgress',
  data() {
    return {
      percentage: 99,
      status: '',
    };
  },
  methods: {
    format(percentage) {
      return `已完成${percentage}%`;
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
    colorMethods(percentage) {
      if (percentage < 20) {
        return 'red';
      } else if (percentage < 40) {
        return 'orange';
      } else {
        return 'green';
      }
    },
  },
  computed: {
    statusMethod() {
      return this.percentage === 100 ? 'success' : '';
    },
  },
};
</script>

<style lang="scss" module></style>
