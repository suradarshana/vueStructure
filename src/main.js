// 3rd party plugins
// -------------
// relative plugins
import Vue from "vue";
import App from "./App.vue";
import Router from "./routes.js";
import "./assets/css/tailwind.css";

import {Tabs, Tab} from 'vue-tabs-component';
 
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

// import vue router plugin

// saying Vue to use router plugin

import animatecss from 'animate.css';

Vue.use(animatecss);


// import components for routing
//import LoginLayout from "./components/login/login-component";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'




//import { FontAwesomeIcon } from '@vue-fontawesome-icon/vue-fontawesome'
//import MenuOne from "./components/menu-one.vue";
//import MenuTwo from "./components/menu-two.vue";

// import maintitle from "./components/maintitle.vue";
// import HelloWorld from "./components/HelloWorld.vue";

// direct components (always visible)
// Vue.component("app-layout", Layout);

Vue.config.productionTip = false;

// Initialise router array


//Vue.component('font-awesome-icon', FontAwesomeIcon);

// inject router array to new VueRouter instance


// Vue Compiler
new Vue({
	//router,
	render: (h) => h(App),
	router: Router
}).$mount("#app");
