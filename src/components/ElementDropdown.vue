<template>
  <div class="element-dropdown">
    <el-dropdown placement="top-start" @click="handleClick" @command="handleCommand">
      <template v-slot:default>
        <span>更多菜单</span>
      </template>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'ElementDropdown',
  methods: {
    handleClick() {
      console.log('点击了');
    },
    handleCommand(command) {
      console.log(`您点击了${command}`);
    },
  },
};
</script>

<style lang="scss" module></style>
