import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // home
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    // 登陆
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    // 移动端下载
    {
        path: '/download',
        name: 'Download',
        component: () =>
            import ('../views/Download.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router