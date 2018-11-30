import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Wallet from '@/components/wallet/Wallet'
import Peers from '@/components/peers/Peers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {path: '', component: Wallet},
      ]
    },
    {path: '/wallet', component: Wallet},
    {path: '/peers', component: Peers}
  ]
})
