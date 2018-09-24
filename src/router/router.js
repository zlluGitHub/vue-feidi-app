import Vue from 'vue'
import VueRouter from 'vue-router'
import Evaluate from '../components/Evaluate'
import IndexContent from '../components/IndexContent'
import business from '../components/Business'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: IndexContent },
  { path: '/evaluate', component: Evaluate },
  { path: '/business', component: business }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
