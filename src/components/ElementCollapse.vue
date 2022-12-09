<template>
  <div class="element-collapse">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item v-for="(item, index) in collapseList" :key="index" :name="item.name" :disabled="true">
        <template #title>
          <div>{{ item.title }}<i class="el-icon-upload"></i></div>
        </template>
        <template #default>
          <div>{{ item.text }}</div>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'ElementCollpse',
  data() {
    return {
      activeNames: [2],
      collapseList: [
        { title: '一致性 Consistency', name: 1, text: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；' },
        { title: '反馈 Feedback', name: 2, text: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；' },
        { title: '效率 Efficiency', name: 3, text: '简化流程：设计简洁直观的操作流程；' },
        { title: '可控 Controllability', name: 4, text: '用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；' },
      ],
      handleChange(val) {
        console.log(val);
      },
    };
  },
};
</script>

<style lang="scss" module></style>
