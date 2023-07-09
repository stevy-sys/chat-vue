import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const route = [
  {
    path: '/',
    name: 'chat',
    component: ChatView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true }
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // Vérifiez l'état de l'authentification ici, utilisez votre système d'authentification ou Vuex
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login') // Redirige vers /login si l'utilisateur n'est pas authentifié et tente d'accéder à une route protégée
  } else {
    if ((isAuthenticated) && (to.name == 'register' || to.name == 'login') ) {
      next('/')
    }else{
      next() // Poursuit la navigation normalement
    }
  }
})
export default router
