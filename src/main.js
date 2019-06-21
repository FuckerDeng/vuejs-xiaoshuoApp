/* eslint-disable import/first */
/* eslint-disable indent */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 1.导入vue核心包
import Vue from 'vue'
// 2.导入主组件App.vue的对象
import App from './App'

// 3.将vue-Router集成到这个项目来
import vueRouter from 'vue-router'
// 4.将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter)

// 5.导入其他路由组件
import login from './components/account/login.vue'
import register from './components/account/register.vue'

// 6.导入minit-ui 全部组件对象
import Mint from 'mint-ui'
// 7.导入minit-ui 的样式文件
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

// 有了Vue.config.productionTip = false这句代码，它会阻止你显示显示生产模式的消息
Vue.config.productionTip = false

let router = new vueRouter({
    routes: [
        { path: '/login', component: login },
        { path: '/register', component: register }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: c => c(App)
})