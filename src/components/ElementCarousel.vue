<template>
  <div :class="$style['element-carousel']">
    <el-carousel arrow="always" direction="vertical">
      <el-carousel-item :class="$style['carousel-item']" label="1">
        <h1>111</h1>
      </el-carousel-item>
      <el-carousel-item :class="$style['carousel-item']" label="2">
        <h1>222</h1>
      </el-carousel-item>
      <el-carousel-item :class="$style['carousel-item']" label="3">
        <h1>333</h1>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'ElementCarousel',
};
</script>

<style lang="scss" module>
.element-carousel {
  margin-bottom: 100px;
  width: 500px;
  border: 1px solid red;
}
.carousel-item {
  background: gray;
}
</style>
