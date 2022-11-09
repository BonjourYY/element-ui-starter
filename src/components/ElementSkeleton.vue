<template>
  <div class="element-skeleton">
    <el-switch v-model="loading"></el-switch>
    <span>{{ loading ? '显示' : '不显示' }}</span>
    <el-skeleton :loading="loading" animated :count="3" :throttle="5000">
      <!-- 占位DOM -->
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px; margin-bottom: 30px"></el-skeleton-item>
        <el-skeleton-item variant="p" style="width: 240px"></el-skeleton-item>
      </template>
      <!-- 真实DOM -->
      <template #default>
        <p>我是真实DOM</p>
        <p>我是真实DOM</p>
        <p>我是真实DOM</p>
        <p>我是真实DOM</p>
        <p>我是真实DOM</p>
        <p>我是真实DOM</p>
        <p>我是真实DOM</p>
        <p>我是真实DOM</p>
      </template>
    </el-skeleton>
  </div>
</template>

<script>
export default {
  name: 'ElementSkeleton',
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style lang="scss" module></style>
