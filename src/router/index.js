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
        title: '检索',
        requireAuth: true
      }
    },
    {
      path: '/search/:ipc',
      name: 'Result',
      component: Result,
      meta: {
        title: '检索结果',
        requireAuth: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  let token = window.localStorage.getItem('token')
  if (to.meta.requireAuth && !token) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  }
  router.afterEach(() => {
    window.scrollTo(0, 0)
  })
  next()
})
export default router
