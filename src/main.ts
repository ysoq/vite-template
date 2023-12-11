import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import 'virtual:uno.css';

// 2. 引入组件样式

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 3. 注册你需要的组件

app.mount('#app');
