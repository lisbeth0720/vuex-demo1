import { createApp } from 'vue'
import App from './App.vue'

import store from './store'

//createApp(App).mount('#app')
//vue3中的写法将vuex挂载到vue实例上
createApp(App).use(store).mount("#app")