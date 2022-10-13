<template>
  <div>
    <el-select v-model="selectedValue" placeholder="请选择水果" :multiple="true" filterable remote :remote-method="getRemote" allow-create default-first-option value-key="label">
      <el-option v-for="(fruit, index) in fruits" :key="index" :value="fruit" :label="fruit.label"></el-option>
    </el-select>
    <p>{{ selectedValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'ElementSelect',
  data() {
    return {
      selectedValue: [],
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
