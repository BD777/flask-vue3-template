const VueRouter = require('vue-router')

console.log(VueRouter)

const routes = [
  { path: '/', name: 'home', component: require('@/views/Home').default }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router
