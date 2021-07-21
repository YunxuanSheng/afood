/*
 * @Description:
 * @Date: 2021-06-19 22:58:55
 * @LastEditors: qingmou
 * @LastEditTime: 2021-06-19 23:11:45
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import UserCenter from '../views/user-center.vue'
import Home from '../views/home.vue'
import Search from '../views/search.vue'
import WaitTransport from '../views/wait-transport.vue'
import InTransport from '../views/in-transport.vue'
import FinishTransport from '../views/finish-transport.vue'
import FinishTask from '../views/finish-task.vue'
import TransactionDetail from '../views/transaction-detail.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "about" */ '../views/home-page.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'user-center',
        name: 'user',
        component: UserCenter
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/user-center',
    name: 'UserCenter',
    component: UserCenter
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/wait-transport',
    name: 'WaitTransport',
    component: WaitTransport
  }, {
    path: '/in-transport',
    name: 'InTransport',
    component: InTransport
  }, {
    path: '/finish-transport',
    name: 'FinishTransport',
    component: FinishTransport
  }, {
    path: '/finish-task',
    name: 'FinishTask',
    component: FinishTask
  }, {
    path: '/transaction-detail',
    name: 'TransactionDetail',
    component: TransactionDetail
    // children: [
    //   {
    //     // 当 /user/:id/profile 匹配成功，
    //     // UserProfile 会被渲染在 User 的 <router-view> 中
    //     path: 'sold',
    //     component: Sold
    //   },
    //   {
    //     // 当 /user/:id/profile 匹配成功，
    //     // UserProfile 会被渲染在 User 的 <router-view> 中
    //     path: 'wait',
    //     component: Wait
    //   },
    //   {
    //     // 当 /user/:id/posts 匹配成功
    //     // UserPosts 会被渲染在 User 的 <router-view> 中
    //     path: 'finished',
    //     component: Finished
    //   }
    // ]
  }
]

const router = new VueRouter({
  routes
})

export default router
