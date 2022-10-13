<template>
  <div>
    <el-cascader clearable :show-all-levels="false" v-model="value" :options="options" :props="props"></el-cascader>
    <p>{{ value }}</p>
  </div>
</template>

<script>
let id = 0;
export default {
  name: 'ElementCascader',
  data() {
    return {
      props: {
        expandTrigger: 'click',
        lazy: true,
        lazyLoad(node, reslove) {
          console.log(node);
          const { level } = node;
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map(() => {
              return {
                value: ++id,
                label: `选项${id}`,
                leaf: level >= 4,
              };
            });
            reslove(nodes);
          }, 1000);
        },
      },
      value: [],
      options: [
        {
          value: '1',
          label: '1',
          children: [
            { value: '1-1', label: '1-1' },
            { value: '1-2', label: '1-2' },
          ],
        },
        {
          value: '2',
          label: '2',
        },
      ],
    };
  },
};
</script>

<style lang="scss" module></style>
