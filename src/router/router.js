import Vue from 'vue'
import VueRouter from 'vue-router'
// import Evaluate from '../components/Evaluate'
import IndexMain from '../components/IndexMain'
import IndexContent from '../components/IndexContent'
import OrderMain from '../components/OrderMain'
import OrderList from '../components/OrderList'
import DetailsMain from '../components/DetailsMain'
import FollowMain from '../components/FollowMain'
import AgentMain from '../components/AgentMain'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: IndexMain,
    children: [
      { path: '/', component: IndexContent },
      {
        path: '/order', component: OrderMain,
        children: [
          { path: '/', component: OrderList },
          { path: '/all', component: OrderList },
          { path: '/pay', component: OrderList },
          { path: '/delivery', component: OrderList },
          { path: '/take', component: OrderList },
          { path: '/finish', component: OrderList }
        ]
      }
    ]
  },
  { path: '/Details', component: DetailsMain },
  { path: '/follow', component: FollowMain },
  { path: '/agent', component: AgentMain }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
