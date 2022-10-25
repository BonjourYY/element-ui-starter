<template>
  <div>
    <el-transfer
      :titles="['Source', 'Target']"
      :button-texts="['到右边', '到左边']"
      :format="{
        noChecked: '未选中,总共${total}',
        hasChecked: '已选中${checked}',
      }"
      filter-placeholder="请输入城市拼音"
      :data="data"
      v-model="value"
      filterable
      :filter-method="filterMethod"
      @change="handleChange"
      @left-check-change="handleLeftCheckChange"
      :props="{
        key: 'value',
        label: 'desc',
      }">
      <template #default="{ option }">
        <span> {{ option.value }}--**--{{ option.desc }}--**-- </span>
      </template>
      <template #left-footer>
        <el-button>操作左</el-button>
      </template>
      <template #right-footer>
        <el-button>操作右</el-button>
      </template>
    </el-transfer>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'ElementTransfer',
  data() {
    const generateData = () => {
      let data = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data.push({
          value: index,
          desc: city,
          pinyin: pinyin[index],
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [0],
      filterMethod(query, item) {
        console.log(item);
        return item.pinyin.indexOf(query) > -1;
      },
    };
  },
  methods: {
    renderFunc(h, option) {
      return (
        <span>
          {option.key}--**--{option.label}
        </span>
      );
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    handleLeftCheckChange(value, selectValue) {
      console.log(value, selectValue);
    },
  },
};
</script>

<style lang="scss" module></style>
