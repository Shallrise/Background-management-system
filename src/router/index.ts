import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/goods',
        name:'goods',
        meta:{
          isShow:true,
          title:"商品列表"
        },
        component:()=>import('../views/GoodsView.vue')
      },
      {
        path:'/user',
        name:'user',
        meta:{
          isShow:true,
          title:"用户列表"
        },
        component:()=>import('../views/UserView.vue')
      },
      {
        path:'/role',
        name:'role',
        meta:{
          isShow:true,
          title:"角色列表"
        },
        component:()=>import('../views/RoleView.vue')
      },
      {
        path:'/authority',
        name:'authority',
        meta:{
          isShow:false,
          title:"权限列表"
        },
        component:()=>import('../views/AuthorityView.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
