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
import SynopsisMain from '../components/SynopsisMain'
import BusinessMain from '../components/BusinessMain'
import HotNewMain from '../components/HotNewMain'
import DatumMain from '../components/DatumMain'
import Login from '../components/Login'
import LoginMain from '../components/LoginMain'
import LoginRegister from '../components/LoginRegister'
import LoginPhone from '../components/LoginPhone'

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
  { path: '/agent', component: AgentMain },
  { path: '/synopsis', component: SynopsisMain },
  { path: '/business', component: BusinessMain },
  { path: '/news', component: HotNewMain },
  { path: '/datum', component: DatumMain },
  {
    path: '/login', component: LoginMain,
    children: [
      { path: '/', component: Login },
      { path: '/register', component: LoginRegister },
      { path: '/phone', component: LoginPhone }
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
