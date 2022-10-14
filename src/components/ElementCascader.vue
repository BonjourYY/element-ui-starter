<template>
  <div>
    <el-cascader clearable :show-all-levels="false" v-model="value" :options="options" :props="props" filterable @expand-change="expandChange">
      <template #default="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf">({{ data.children.length }})</span>
      </template>
    </el-cascader>
    <el-cascader-panel :options="options"></el-cascader-panel>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'ElementCascader',
  data() {
    return {
      props: {
        expandTrigger: 'click',
      },
      value: [],
      options: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1-1',
              label: '1-1',
              children: [
                { value: '1-1-1', label: '1-1-1' },
                { value: '1-1-2', label: '1-1-2' },
              ],
            },
            { value: '1-2', label: '1-2' },
          ],
        },
        {
          value: '2',
          label: '2',
        },
        {
          value: '1',
          label: '1',
          children: [
            { value: 'xxx', label: 'xxx' },
            { value: 'sss', label: 'sss' },
          ],
        },
      ],
    };
  },
  methods: {
    expandChange(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" module></style>
