<template>
  <div class="element-tabs">
    <el-tabs v-model="editableTabsValue" @tab-click="handleClick" tab-position="top" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">{{ item.content }}</el-tab-pane>
    </el-tabs>
    {{ tabIndex }}
  </div>
</template>

<script>
export default {
  name: 'ElementTabs',
  data() {
    return {
      editableTabsValue: '2',
      editableTabs: [
        { title: 'Tab-1', name: '1', content: 'Tab-1-content' },
        { title: 'Tab-2', name: '2', content: 'Tab-2-content' },
        { title: 'Tab-3', name: '3', content: 'Tab-3-content' },
      ],
    };
  },
  computed: {
    tabIndex() {
      return this.editableTabs.length;
    },
  },
  methods: {
    handleClick(targetName, action) {
      console.log(targetName, action);
    },
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = String(++this.tabIndex);
        this.editableTabs.push({ name: newTabName, title: `Tab-${++this.tabIndex}`, content: `Tab-${++this.tabIndex}-content` });
        this.editableTabsValue = newTabName;
      }
      if (action === 'remove') {
        // 如果删除的是选中的，设置删除之后，自动聚焦
        let tabs = this.editableTabs;
        let activeTab = this.editableTabsValue;
        if (activeTab === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              console.log(tab);
              console.log(targetName);
              // 下一个要选中的tab
              console.log(index);
              let nextTab = tabs[index + 1] || tabs[index - 1];
              console.log(nextTab); // tabs[-1]不存在，所以为 undefined
              if (nextTab) {
                this.editableTabsValue = nextTab.name;
              } else {
                console.log('删除的是最后一个');
              }
            }
          });
        }
        this.editableTabs = this.editableTabs.filter((tab) => {
          return tab.name !== targetName;
        });
      }
    },
  },
};
</script>

<style lang="scss" module></style>
