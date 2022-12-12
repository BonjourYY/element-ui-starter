<template>
  <div class="element-infinitescroll">
    <ul :class="$style['infinitescroll-list']" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
      <li :class="$style['infinitescroll-item']" v-for="(index, item) in count" :key="index">{{ item }}</li>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ElementInfinitescroll',
  data() {
    return {
      count: 5,
      loading: false,
    };
  },
  computed: {
    disabled() {
      return this.loading || this.noMore;
    },
    noMore() {
      return this.count >= 10;
    },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 1;
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" module>
.infinitescroll-list {
  border: 1px solid red;
  height: 50px;
  overflow: auto;
}
</style>
