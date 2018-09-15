
import  Home from './components/Home/home.vue'

let routes = [

  {
    path: '/',//父控制器主页面
    meta: {
      requireAuth: true,
    },
    component: Home,
  },
  {
    path: '/home',//父控制器--主页面
    name: 'home',
    meta: {
      requireAuth: true,
    },
    component: Home,
  }
]


export default routes;
