// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import VueResources from 'vue-resource';
Vue.use(VueResources)

import VueRouter from 'vue-router';
Vue.use(VueRouter)

import Test from "./components/Test";
import User from "./components/User";


const router = new VueRouter({

    mode: "history",
    // __dirname = es una constante de NodeJS
    base: __dirname, // desde donde se van a obtener los directorios/compónentes
    routes: [{
            path: "/",
            component: User
        },
        {
            path: "/test",
            component: Test
        }
    ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    //el: '#app',
    router,
    components: { App },
    template: '<App/>'
}).$mount("#app")