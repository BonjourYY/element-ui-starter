<template>
  <div class="element-datetime-picker">
    <el-date-picker v-model="value" type="datetime" default-time="14:00:00"> </el-date-picker>
    <el-date-picker v-model="value" type="datetimerange" :default-time="['14:00:00', '15:00:00']" :picker-options="options"> </el-date-picker>
    <el-date-picker v-model="value" type="datetimerange" :default-time="['14:00:00', '15:00:00']"> </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'ElementDatetimePicker',
  data() {
    return {
      value: new Date(2000, 10, 10, 10, 10),
      options: {
        cellClassName(e) {
          console.log(e.getDay());
          if (e.getDay() === 1 || e.getDay() === 6) {
            return 'e-yellow-123';
          }
        },
      },
    };
  },
};
</script>

<!-- 这里不能用scoped 否则会样式会失效，因为加了scoped，会有 [date-**]，而cellClassName返回的是不带[data-**]的 -->
<style lang="scss">
.e-yellow-123 {
  color: yellow;
}
</style>
