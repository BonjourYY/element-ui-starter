<template>
  <div class="element-tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick($event)" tab-position="left" type="card">
      <el-tab-pane name="first">
        <template #label>
          <p>123</p>
        </template>
        <template #default>
          <p>123213213</p>
        </template>
      </el-tab-pane>
      <el-tab-pane label="tab-2" name="second">tab-2</el-tab-pane>
      <el-tab-pane label="tab-3" name="third">tab-3</el-tab-pane>
      <el-tab-pane label="tab-4" name="fourth">tab-4</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'ElementTabs',
  data() {
    return {
      activeName: 'third',
    };
  },
  methods: {
    handleClick(e, name, tab) {
      console.log(e, name, tab);
    },
  },
};
</script>

<style lang="scss" module></style>
