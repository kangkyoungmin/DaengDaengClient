import Vue from 'vue';
import App from './App.vue';
import { router } from './router/index.js';
import store from './store/index.js';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vueScrollTrigger from 'vue-scroll-trigger'
Vue.use(BootstrapVue);

// sidemenu를 위한 설정
import VueSidebarMenu from 'vue-sidebar-menu';
import vuetify from './plugins/vuetify';
import sidemenu from '../public/css/sidemenu.css';

//css 설정
import '../public/css/mycss.css';
import axios from 'axios'; // import axios

//css 설정
import '../public/css/mycss.css';
import '../public/css/styles.min.css'; // 폰트 적용됨

Vue.config.productionTip = false;

Vue.prototype.$axios = axios; // prototype에 axios 추가

new Vue({
	components: {
		app: App,
	},
	render: h => h(App),
	router,
	store,
	vuetify,
	sidemenu,
	VueSidebarMenu,
	vueScrollTrigger
}).$mount('#app');
