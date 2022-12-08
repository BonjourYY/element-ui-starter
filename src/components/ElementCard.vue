<template>
  <div :class="$style['element-card']">
    <el-card :body-style="{ padding: '0', border: '5px solid red' }" shadow="hover">
      <template #default>
        <img src="https://picsum.photos/490" alt="" />
        <div v-for="item in 4" :key="item">
          <span>内容: {{ item }}</span>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ElementCard',
};
</script>

<style lang="scss" module>
.element-card {
  width: 500px;
  margin-bottom: 100px;
}
</style>
