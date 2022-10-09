<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ElementLayout></ElementLayout>
    <ElementContainer></ElementContainer>
  </div>
</template>

<script>
import ElementLayout from "./components/ElementLayout.vue"
import ElementContainer from "./components/ElementContainer.vue"
export default {
  name: 'app',
  components: {
    ElementLayout,
    ElementContainer
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
</style>
