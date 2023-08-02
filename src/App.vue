<template>
  <header>
    <nav class="menum navbar navbar-dark navbar-expand-md justify-content-center">
      <div class="container">
        <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
          <ul class="topBotomBordersOut navbar-nav mx-auto text-center">
            <li v-if="isConnected" class="nav-item active">
              <RouterLink class="nav-link" to="/">Chat</RouterLink>
            </li>
            <li v-if="isConnected" class="nav-item">
              <RouterLink class="nav-link" to="/profile">User</RouterLink>
            </li>
            <li v-if="!isConnected" class="nav-item">
              <RouterLink class="nav-link" to="/login">Login</RouterLink>
            </li>
            <li v-if="!isConnected" class="nav-item">
              <RouterLink class="nav-link" to="/register">Register</RouterLink>
            </li>
            <li v-if="isConnected" class="nav-item">
              <RouterLink @click="deconnexion()" class="nav-link" to="#">Deconnexion</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useStore} from 'vuex'
import {computed} from 'vue'
import { useRouter } from 'vue-router';
// import { echo } from './config/echo';
// import axios from "axios"

// axios.get("http://sous-ruby.com.rubycorp.fr/api/test")
//   .then(response => console.error(response))
//   .catch(error => { console.error(error);})


const router = useRouter()
const store = useStore()
const isConnected = computed(() => store.getters.getConnected)

const deconnexion = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  store.dispatch('setInitialiseState')
  router.push({name:"login"})
  store.dispatch('deleteUserEnLigne',store.getters.getUser)
}

// echo.join(`presence-user`)
//     .here((users) => {
//       store.dispatch('setUserEnLigne',users)
//     })
//     .joining((user) => {
//       store.dispatch('addUserEnLigne',user)
//     })
//     .leaving((user) => {
//       store.dispatch('deleteUserEnLigne',user)
//     })
//     .listen('.presenceAction',(e) => {
//       console.log('action',e)
//       if (e.action == 'connexion') {
//         store.dispatch('addUserEnLigne',e.user)
//       }
//       if (e.action == 'deconnexion') {
//         store.dispatch('deleteUserEnLigne',e.user)
//       }
//     })

</script>



<style scoped>
  @import './assets/menu.css' ;
</style>
