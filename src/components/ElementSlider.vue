<template>
  <div>
    <el-slider v-model="value" :format-tooltip="formatTooltip" range :marks="marks"></el-slider>
  </div>
</template>

<script>
export default {
  name: 'ElementSlider',
  data() {
    return {
      value: [20, 100],
      marks: {
        0: '0°',
        30: '30°',
        50: '50°',
        80: { style: { color: 'red' }, label: this.$createElement('strong', '80°') },
      },
    };
  },
  methods: {
    formatTooltip(value) {
      return `现在的值是：${value}`;
    },
  },
};
</script>

<style lang="scss" module></style>
