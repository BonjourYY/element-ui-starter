<template>
  <div class="element-nav-menu">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2-1"
      menu-trigger="hover"
      :unique-opened="true"
      :default-openeds="['2', '2-2']"
      @select="handleSelect"
      mode="horizontal"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router>
      <el-menu-item index="1">
        <i class="el-icon-search"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-upload"></i>
          <span>赞奇渲染</span>
        </template>
        <el-menu-item-group title="分组1">
          <el-menu-item index="2-1">效果图版</el-menu-item>
          <el-submenu index="2-2">
            <template #title>影视版</template>
            <el-menu-item index="2-2-1">影视版-1</el-menu-item>
            <el-menu-item index="2-2-2">影视版-2</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3">
        <span>呆猫</span>
      </el-menu-item>
      <el-submenu index="4">
        <template #title>影视版</template>
        <el-menu-item index="4-4">影视版-1</el-menu-item>
        <el-menu-item index="4-2">影视版-2</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'ElementNavMenu',
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" module></style>
