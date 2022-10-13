<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <ElementLayout></ElementLayout>
    <ElementContainer></ElementContainer>
    <ElementIcon></ElementIcon>
    <ElementButton></ElementButton>
    <ElementLink></ElementLink>
    <ElementRadio></ElementRadio>
    <ElementCheckBox></ElementCheckBox>
    <ElementInput></ElementInput>
    <ElementInputNumber></ElementInputNumber>
    <ElementSelect></ElementSelect>
    <ElementCascader></ElementCascader>
  </div>
</template>

<script>
import ElementLayout from './components/ElementLayout.vue';
import ElementContainer from './components/ElementContainer.vue';
import ElementIcon from './components/ElementIcon.vue';
import ElementButton from './components/ElementButton.vue';
import ElementLink from './components/ElementLink.vue';
import ElementRadio from './components/ElementRadio.vue';
import ElementCheckBox from './components/ElementCheckBox.vue';
import ElementInput from './components/ElementInput.vue';
import ElementInputNumber from './components/ElementInputNumber.vue';
import ElementSelect from './components/ElementSelect.vue';
import ElementCascader from './components/ElementCascader.vue';
export default {
  name: 'app',
  components: {
    ElementLayout,
    ElementContainer,
    ElementIcon,
    ElementButton,
    ElementLink,
    ElementRadio,
    ElementCheckBox,
    ElementInput,
    ElementInputNumber,
    ElementSelect,
    ElementCascader,
  },
  methods: {
    getMessages() {
      console.log('s');
    },
  },
};
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
</style>
