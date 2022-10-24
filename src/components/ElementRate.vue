<template>
  <div class="element-rate">
    <!-- 默认不区分颜色 -->
    <el-rate v-model="value1" @change="scopeChange"> </el-rate>
    <span>{{ value1 }}</span>
    <!-- 区分颜色 -->
    <el-rate v-model="value2" :colors="colors" show-text :texts="texts" void-icon-class="el-icon-star-off" :icon-classes="iconClasses" text-color="red"></el-rate>
    <span>{{ value2 }}</span>
    <!-- 只读 -->
    <el-rate disabled :score-template="`今天的值是{value}`" v-model="value3" show-score></el-rate>
  </div>
</template>

<script>
export default {
  name: 'ElementRate',
  data() {
    return {
      value1: null,
      value2: null,
      value3: 3.5,
      colors: { 1: 'red', 2: 'green', 5: 'yellow' },
      texts: ['one', 'two', 'three', 'four', 'five'],
      iconClasses: ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'],
    };
  },
  methods: {
    scopeChange(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" module></style>
