<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav class="menum navbar navbar-dark navbar-expand-md justify-content-center">
      <div class="container">
        <div class="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
          <ul class="topBotomBordersOut navbar-nav mx-auto text-center">
            <li class="nav-item active">
              <RouterLink class="nav-link" to="/">Chat</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/profile">User</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/login">Login</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/register">Register</RouterLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
  @import './assets/menu.css' ;


</style>
