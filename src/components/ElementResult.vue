<template>
  <div class="element-result">
    <el-result>
      <template #icon>
        <img src="https://picsum.photos/200" alt="picture" />
      </template>
      <template #title>Header-1</template>
      <template #subTitle>Header-2</template>
      <template #extra>
        <el-button type="success">YES</el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
export default {
  name: 'ElementResult',
};
</script>

<style lang="scss" module></style>
