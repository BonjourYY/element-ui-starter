<template>
  <div class="element-radio">
    <el-radio-group v-model="radio" @change="radioChange($event)" size="small" text-color="gray" fill="green">
      <el-radio-button :label="3" border></el-radio-button>
      <el-radio :label="6"></el-radio>
      <el-radio :label="9" border></el-radio>
    </el-radio-group>
    <span>{{ radio }}</span>
  </div>
</template>

<script>
export default {
  name: 'ElementRadio',
  data() {
    return {
      radio: 3,
    };
  },
  methods: {
    radioChange($event) {
      console.log($event);
    },
  },
};
</script>

<style lang="scss" module></style>
