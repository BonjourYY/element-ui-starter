<template>
  <div>
    <el-time-select v-model="value" :picker-options="{ start: '08:00', step: '00:15', end: '20:00' }" placeholder="选择时间" align="center"></el-time-select>
    <el-time-picker v-model="value1" :picker-options="{ selectableRange: '18:30:00 - 20:30:30' }"></el-time-picker>
    <el-time-select v-model="startTime" :picker-options="{ start: '08:00', step: '00:15', end: '20:00' }"></el-time-select>
    <el-time-select v-model="endTime" :picker-options="{ start: '08:00', step: '00:15', end: '20:00', minTime: startTime }"></el-time-select>
    <el-time-picker v-model="value2" is-range range-separator="至"></el-time-picker>
  </div>
</template>

<script>
export default {
  name: 'ElementTimePicker',
  data() {
    return { value: null, value1: new Date(2016, 9, 10, 18, 40, 30), startTime: null, endTime: null, value2: null };
  },
};
</script>

<style lang="scss" module></style>
