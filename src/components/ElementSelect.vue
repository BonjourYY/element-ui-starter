<template>
  <div>
    <el-select v-model="selectedValue" placeholder="请选择水果" :multiple="true" filterable remote :remote-method="getRemote">
      <el-option v-for="(fruit, index) in fruits" :key="index" :lable="fruit.label" :value="fruit.value"></el-option>
    </el-select>
    <p>{{ selectedValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'ElementSelect',
  data() {
    return {
      selectedValue: null,
      fruits: null,
      lists: null,
      states: ['apple', 'orange', 'banana'],
    };
  },
  methods: {
    getRemote(query) {
      if (query !== '') {
        this.fruits = this.lists.filter((item) => {
          return item.label.toLowerCase().includes(query.toLowerCase());
        });
      } else {
        this.fruits = [];
      }
    },
  },
  mounted() {
    this.lists = this.states.map((item) => {
      return { value: item, label: item };
    });
  },
};
</script>

<style lang="scss" module></style>
