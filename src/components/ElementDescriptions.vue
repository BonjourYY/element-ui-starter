<template>
  <div class="element-descriptions">
    <el-descriptions title="用户信息" size="small" border :column="2" direction="vertical" :label-class-name="$style['my-label']" :content-class-name="$style['my-content']">
      <el-descriptions-item label="姓名" :span="2">Jackfan</el-descriptions-item>
      <el-descriptions-item label="手机号">13164231313</el-descriptions-item>
      <el-descriptions-item label="姓名"
        >1321321321
        <!-- 未出现插槽内容，原因如下 -->
        <template #label>
          <el-button type="success">交流交流</el-button>
        </template>
        <!-- slot prop has deprecated -->
        <!-- <template slot="label">
          <el-button type="success">交流交流</el-button>
        </template> -->
      </el-descriptions-item>
      <el-descriptions-item label="姓名">Jackfan</el-descriptions-item>
      <el-descriptions-item label="手机号">13164231313</el-descriptions-item>
      <template #extra>
        <el-button type="success">操作</el-button>
      </template>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: 'ElementDescriptions',
};
</script>

<style lang="scss" module>
.my-label {
  background-color: red !important;
}
.my-content {
  background-color: gray;
}
</style>
