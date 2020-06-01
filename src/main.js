// 3rd party plugins

// relative plugins
import Vue from 'vue';
import App from './App.vue';

// import vue router plugin
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import components for routing
import LoginLayout from "./components/login/login-component";
import DashboardLayout from "./components/dashboard-layout";
import MenuOne from "./components/menu-one.vue";
import MenuTwo from "./components/menu-two.vue";

// import maintitle from "./components/maintitle.vue";
// import HelloWorld from "./components/HelloWorld.vue";
// direct components (always visible)
// Vue.component("app-layout", Layout);
// saying Vue to use router plugin


Vue.config.productionTip = false;
// Initialise router array
const routes = [
    {path: "/", component: LoginLayout},
    {
        path: "/dashboard", component: DashboardLayout,
        children: [{path: "/dashboard/menu1", component: MenuOne},{path: "/dashboard/menu2", component: MenuTwo} ]
    }
]

// inject router array to new VueRouter instance
const router = new VueRouter({
    routes
})
// Vue Compiler
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')




