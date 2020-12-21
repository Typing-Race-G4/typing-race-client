import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Room from '../views/Room'
import GamePage from '../views/GamePage.vue'
import CreateRoom from '../views/CreateRoom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/rooms',
    name: 'Room',
    component: Room
  },
  {
    path: '/addroom',
    name: 'CreateRoom',
    component: CreateRoom
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/game/:room',
    name: 'GamePage',
    component: GamePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const authenticated = localStorage.getItem('username')
  if (to.name !== 'Login' && !authenticated) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && authenticated) {
    next({ name: 'Room' })
  } else {
    next()
  }
})

export default router
