/* eslint-disable new-cap */
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
import home from './components/home.vue'

// 6.导入minit-ui 全部组件对象
import Mint from 'mint-ui'
// 7.导入minit-ui 的样式文件
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

// 8.注册MUI的css样式文件
import '../static/mui/css/mui.css'

// 导入阿里妈妈字体库
import '../static/font_1nq1s74vfvs/iconfont.css'

// 9.导入系统全局的css样式
import '../static/css/site.css'
// 有了Vue.config.productionTip = false这句代码，它会阻止你显示显示生产模式的消息
Vue.config.productionTip = false

// 10.导入anxios网络请求库（cnpm install axios -S -D）
import axios from 'axios'
Vue.prototype.$axios = axios
    // 设置此属性，表示用axios访问的链接前面都会加上这个
axios.defaults.baseURL = '/api'
    // 表示传输的都是json字符串
axios.defaults.headers.post['Content-Type'] = 'application/json'
    // axios解决跨域问题：在config文件夹的index.js中,proxyTable中进行如下配置：
    // 用axios访问的链接会在前面加上 /api ,访问时，被config中index文件拦截，将
    // /api 替换成target 对应的字符串
    /**
    '/api':{
        target: "http://localhost:8080",
        changeOrigin:true,
        pathRewrite:{
            '/api':''
        }
    }
    */

let router = new vueRouter({
    // tabbar使用的是mui的组件，此组件的连接被点击时会自动添加一个mui-active类，使点击的
    // 链接字体颜色改变，而vue的路由链接激活（被点击）后，会自动添加一个 router-link-active类
    // 我们想要实现点击后点亮的功能，可以将vue默认的这个类名改成和mui中一样的类名，即下面的这个
    // 设置，也可以在css代码中将router-link-active类的样式和mui中mui-active的样式一致
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', component: home },
        { path: '/home', component: home },
        { path: '/register', component: register }
    ]
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: c => c(App)
})