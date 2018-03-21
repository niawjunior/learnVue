import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FormItem from '@/components/FormItem'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',

      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'Add',
      component: FormItem
    }
  ]
})
