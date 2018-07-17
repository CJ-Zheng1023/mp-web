import Vue from 'vue'
import Router from 'vue-router'
import Login from 'components/Login'
import Register from 'components/Register'
import Search from 'components/Search'
import Result from 'components/Result'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        title: '检索'
      }
    },
    {
      path: '/search/:ipc',
      name: 'Result',
      component: Result,
      meta: {
        title: '检索结果'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
export default router
