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
    <ElementSwitch></ElementSwitch>
    <ElementSlider></ElementSlider>
    <ElementTimePicker></ElementTimePicker>
    <ElementDatePicker></ElementDatePicker>
    <ElementDatetimePicker></ElementDatetimePicker>
    <ElementUpload></ElementUpload>
    <ElementRate></ElementRate>
    <ElementColorPicker></ElementColorPicker>
    <ElementTransfer></ElementTransfer>
    <ElementForm></ElementForm>
    <ElementTag></ElementTag>
    <ElementProgress></ElementProgress>
    <ElementTree></ElementTree>
    <ElementPagination></ElementPagination>
    <ElementBadge></ElementBadge>
    <ElementAvatar></ElementAvatar>
    <ElementSkeleton></ElementSkeleton>
    <ElementEmpty></ElementEmpty>
    <ElementDescriptions></ElementDescriptions>
    <ElementResult></ElementResult>
    <ElementAlert></ElementAlert>
    <ElementLoading></ElementLoading>
    <ElementMessage></ElementMessage>
    <ElementMessageBox></ElementMessageBox>
    <ElementNotification></ElementNotification>
    <ElementTabs></ElementTabs>
    <ElementStatistic></ElementStatistic>
    <ElementNavMenu></ElementNavMenu>
    <ElementBreadCrumb></ElementBreadCrumb>
    <ElementPageHeader></ElementPageHeader>
    <ElementDropdown></ElementDropdown>
    <ElementSteps></ElementSteps>
    <ElementDialog></ElementDialog>
  </div>
</template>

<script>
export default {
  name: 'app',
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
</style>
