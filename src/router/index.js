import Vue from 'vue'
import Router from 'vue-router'
import Science from '@/components/science.vue'
import Humanity from '@/components/humanity.vue'
import Literature from '@/components/literature.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/literature',
      name: 'literature',
      component: Literature
    },
    {
      path: '/science',
      name: 'science',
      component: Science
    }, 
    {
      path: '/humanity',
      name: 'humanity',
      component: Humanity
    }      
  ]
})

