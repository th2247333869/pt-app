
import  Home from './components/Home/login.vue'
import  main from './components/Home/main.vue'
import  Us from './components/routerPages/User.vue'
import  message from './components/routerPages/message.vue'
import  register from './components/Home/register.vue'
import  editor from './components/common/TEditor.vue'
import  main2 from './components/Home/main2.vue'
//2.0ui 子页面切换
import  page from './components/Home/MainPage/page.vue'
import  Search from './components/routerPages/search.vue'

let routes = [
  {
    path: '/',//父控制器--主页面
    name: 'home',
    meta: {
      requireAuth: true,
      index:0
    },
    component: Home,
  },
  {
    path: '/home',//父控制器--主页面
    name: 'home',
    meta: {
      requireAuth: true,
      index:0
    },
    component: Home,
  },
  {
    path: '/register',//父控制器--主页面
    name: 'register',
    meta: {
      requireAuth: true,
      index:0
    },
    component: register,
  },
  {
    path: '/main',//父控制器--主页面
    name: 'main',
    meta: {
      requireAuth: true,
      index:1
    },
    component: main2,
    redirect: 'page',//设置默认指向的路径
    children:[
      {//测试
        name:'page',
        path: '/page',
        meta: {
          requireAuth: true,
        },
        component:page
      },
    ]
  },
  {//文本测试
    name:'editor',
    path: '/editor',
    meta: {
      requireAuth: true,
    },
    component:editor
  },
  {
    name:'Us',
    path: '/Us',
    meta: {
      requireAuth: true,
    },
    component:Us
  },
  {
    name:'Search',
    path: '/Search',
    meta: {
      requireAuth: true,
    },
    component:Search
  },
  {
    name:'message',
    path: '/message',
    meta: {
      requireAuth: true,
    },
    component:message
  },

]


export default routes;
