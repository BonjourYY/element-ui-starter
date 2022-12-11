<template>
  <div class="element-calendar">
    <el-calendar v-model="value" :range="['2022-12-05', '2023-01-29']" :first-day-of-week="7">
      <template #dateCell="{ date, data }">
        <p>{{ date.getDate() }}</p
        ><span>{{ data.isSelected ? '👆' : '' }}</span> <p>{{ data.day }}</p></template
      >
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: 'ElementCalendar',
  data() {
    return {
      value: new Date('2017-3-11'),
    };
  },
};
</script>

<style lang="scss" module></style>
