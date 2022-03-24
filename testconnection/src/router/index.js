import Vue from 'vue'
import Router from 'vue-router'

import String from "../components/form/String";
import Hash from "../components/form/Hash";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'String',
      component: String
    },
    {
      path: '/hash',
      name:'Hash',
      component: Hash
    }
  ],
  mode:'history'
})
