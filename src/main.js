import Vue from 'vue';
import App from './App.vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import './plugins/element.js';

Vue.config.productionTip = false;

// 自动注册全局组件
// https://v2.cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C
const requireComponent = require.context('./components', false, /[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  );
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
