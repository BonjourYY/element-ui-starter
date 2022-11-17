<template>
  <div class="element-statistic">
    <el-row :gutter="20">
      <el-col :span="12">
        <div>
          <el-statistic group-separator="yyy" :precision="2" :value="like ? 521000 : 520000" title="FeedBack" rate="10000">
            <template #suffix>
              <span @click="like = !like" :style="styleObj">
                <i class="el-icon-upload" v-if="like"></i>
                <i class="el-icon-user" v-if="!like"></i>
              </span>
            </template>
          </el-statistic>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <el-statistic :value="deadline" time-indices title="抢购时间" format="HH:mm:ss" ref="statistic">
            <template #suffix>
              <el-button @click="pause">暂停</el-button>
            </template>
          </el-statistic>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ElementStatistic',
  data() {
    return {
      like: true,
      styleObj: {
        cursor: 'pointer',
      },
      deadline: new Date('November 17,2022 11:20:00'),
      stop: true,
    };
  },
  methods: {
    pause() {
      // 第一次为 true 才能暂定时间
      let result = this.$refs.statistic.suspend(this.stop);
      console.log(result);
      this.stop = !this.stop;
    },
  },
};
</script>

<style lang="scss" module></style>
