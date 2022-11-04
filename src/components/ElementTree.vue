<template>
  <div class="element-tree">
    <el-tree :props="defaultProps" :lazy="true" :load="handleLoad" @node-click="handleClick($event, data)" show-checkbox></el-tree>
  </div>
</template>

<script>
export default {
  name: 'ElementTree',
  data() {
    return {
      data: [
        { text: '1', tree: [{ text: '1-1' }, { text: '1-2' }] },
        { text: '2', tree: [{ text: '2-1', tree: [{ text: '2-1-1' }] }, { text: '2-2' }] },
        { text: '3', tree: [{ text: '3-1', tree: [{ text: '3-1-1' }] }] },
      ],
      defaultProps: {
        label: 'text',
        children: 'tree',
      },
    };
  },
  methods: {
    handleClick(e, data) {
      console.log(e, data);
    },
    // 懒加载
    handleLoad(node, resolve) {
      if (node.level === 0) {
        // 该函数的目的是生成子树
        resolve([{ text: 'zoom1' }, { text: 'zoom2' }]);
      }
      if (node.level > 3) return resolve([]);
      // let hasChild;
      if (node.data.name === 'zoom1') {
        let hasChild;
        hasChild = true;
      }
      if (node.data.name === 'zoom2') {
        console.log(1);
      }
    },
  },
};
</script>

<style lang="scss" module></style>
