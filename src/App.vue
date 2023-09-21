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
import { echo } from './config/echo';
import { deconnect } from './service/auth.service'
// import axios from "axios"



const router = useRouter()
const store = useStore()
const isConnected = computed(() => store.getters.getConnected)

const deconnexion = async () => {
  const res = await deconnect()
  await localStorage.removeItem('token')
  await localStorage.removeItem('user')
  await store.dispatch('setInitialiseState')
  await router.push({name:"login"})
  // await store.dispatch('deleteUserEnLigne',store.getters.getUser)

}

echo.join(`presence-user`)
    .here((users) => {
      console.log('presnece',users)
      store.dispatch('setUserEnLigne',users)
    })
    .joining((user) => {
      console.log('join',user)
      store.dispatch('addUserEnLigne',user)
    })
    .leaving((user) => {
      console.log('leave',user)
      store.dispatch('deleteUserEnLigne',user)
    })
    .listen('.presenceAction',(e) => {
      console.log('action',e)
      if (e.action == 'connected') {
        store.dispatch('addUserEnLigne',e.user)
      }
      if (e.action == 'deconnected') {
        store.dispatch('deleteUserEnLigne',e.user)
      }
    })

</script>



<style scoped>
  @import './assets/menu.css' ;
</style>
