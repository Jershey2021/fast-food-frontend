import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';


import '@ionic/core/css/ionic.bundle.css';


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
  
// Header Layout
import Header from "./HeaderLayout/Header.vue"
import MenuSideBar from "./FastFoodAppPages/Menu.vue"
import Popover from './FastFoodAppPages/Popover.vue';


// Theme
import './theme/variables.css';

// Font
import './assets/font.css'; 


const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('header-layout', Header)
app.component('MenuSideBar', MenuSideBar)
app.component('Popover', Popover)

// If addIcons is not required, you can directly use the icons

router.isReady().then(() => {
  app.mount('#app');
});
