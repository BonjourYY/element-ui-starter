<template>
  <div class="element-date-picker">
    <!-- 选择日期 -->
    <el-date-picker v-model="value" type="date"></el-date-picker>
    <!-- 带有快捷选项 -->
    <el-date-picker v-model="value" type="date" :picker-options="options1"></el-date-picker>
    <!-- 选择周，set format attribute -->
    <el-date-picker v-model="value" type="week" format="yyyy 第 WW 周"></el-date-picker>
    <!-- Select month -->
    <el-date-picker v-model="value" type="month"></el-date-picker>
    <!-- Select year -->
    <el-date-picker v-model="value" type="year"></el-date-picker>
    <!-- Select multiple date -->
    <el-date-picker v-model="value" type="dates"></el-date-picker>
    <!-- Select multiple month -->
    <el-date-picker v-model="value" type="months"></el-date-picker>
    <!-- Select multiple year -->
    <el-date-picker v-model="value" type="years"></el-date-picker>
    <!-- 无效 -->
    <el-date-picker v-model="value" type="weeks"></el-date-picker>
    <!-- Select Date Range -->
    <el-date-picker v-model="value" type="daterange" range-separator="到"></el-date-picker>
    <!-- Select Date Range UnLinkPanels -->
    <el-date-picker v-model="value" type="daterange" range-separator="到" unlink-panels :picker-options="options2"></el-date-picker>
    <!-- Select Month Range -->
    <el-date-picker v-model="value" type="monthrange" range-separator="到"></el-date-picker>
    <!-- Select Month Range UnLinkPanels -->
    <el-date-picker v-model="value" type="monthrange" range-separator="到" unlink-panels :picker-options="options3" @focus="fn"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'ElementDatePicker',
  data() {
    return {
      value: null,
      options1: {
        disabledDate(time) {
          // console.log(time);
          // true 禁用，false 不禁用
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              console.log(picker);
              picker.$emit('pick', new Date());
            },
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              // 转换成毫秒
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            },
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            },
          },
        ],
      },
      options2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
      options3: {
        shortcuts: [
          {
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            },
          },
          {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
    };
  },
  methods: {
    fn(e) {
      console.log('获取焦点');
      console.log(e);
    },
  },
};
</script>

<style lang="scss" module></style>
