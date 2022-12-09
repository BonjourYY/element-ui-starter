<template>
  <div class="element-timeline">
    <el-timeline :reverse="true">
      <el-timeline-item
        v-for="(item, index) in timelineList"
        :hide-timestamp="true"
        type="success"
        icon="el-icon-more"
        placement="top"
        size="large"
        color="red"
        :key="index"
        :timestamp="item.timestamp"
        >{{ item.content }}
        <template #dot>
          <div :class="$style['dot']"></div>
        </template>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'ElementTimeline',
  data() {
    return {
      timelineList: [
        { content: '活动开始', timestamp: '2022-12-9' },
        { content: '活动进行中', timestamp: '2022-12-10' },
        { content: '活动结束', timestamp: '2022-12-11' },
      ],
    };
  },
};
</script>

<style lang="scss" module>
.dot {
  width: 10px;
  height: 20px;
  background: #413534;
}
</style>
