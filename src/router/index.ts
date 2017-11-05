import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Profile from '@/pages/Profile.vue'
import Foo from '@/pages/Foo.vue'
import * as PAGE_ENUM from '@/util/const/PageNameEnum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: PAGE_ENUM.PAGE_NAME.LOGIN,
      component: Login
    },
    {
      path: '/home',
      name: PAGE_ENUM.PAGE_NAME.HOME,
      component: Home
    },
    {
      path: '/foo/:msg',
      name: PAGE_ENUM.PAGE_NAME.FOO,
      component: Foo
    }
  ]
})
