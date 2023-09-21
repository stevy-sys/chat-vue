<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-md-offset-12 text-center">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Login via site</h3>
          </div>
          <div class="panel-body">
            <form @submit.prevent="submit()" accept-charset="UTF-8" role="form">
              <fieldset>
                <div class="form-group">
                  <input v-model="form.email" class="form-control type_input" placeholder="yourmail@example.com"
                    name="email" type="text">
                </div>
                <div class="form-group">
                  <input v-model="form.password" class="form-control type_input" placeholder="Password" name="password"
                    type="password">
                </div>
                <div class="checkbox">
                  <label>
                    <input name="remember" type="checkbox"> Remember Me
                  </label>
                </div>
                <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
              </fieldset>
            </form>
            <hr />
            <input @click="test()" class="btn btn-lg btn-facebook btn-block" type="submit" value="Login via facebook">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '../service/auth.service'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import axios from "axios"

const router = useRouter()
const store = useStore()
const form = ref({
  email: '',
  password: '',
})


const submit = async () => {
  try {
    const response = await login(form.value)
    console.log(response)
    if (response.token) {
      await store.dispatch('saveToken',response.token)
      await store.dispatch('saveUser',response.user)
      await store.dispatch('setConnected',true)
      await localStorage.setItem('token', response.token)
      await localStorage.setItem('user',JSON.stringify(response.user))
      await store.dispatch('addUserEnLigne',response.data.user)
      await router.push({ name: 'chat' })
    } else {
      alert(response.message)
    }
  } catch (error) {
    console.error(error.message)
  }
}
</script>

<style scoped>
.white {
  color: #000;
  background-color: #fff;
}

.type_input {
  background-color: rgba(0, 0, 0, 0.3) !important;
  border: 0 !important;
  color: white !important;
  height: 60px !important;
  overflow-y: auto;
}

.btn-facebook {
  color: #ffffff;
  -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background-color: #2b4b90;
  background-color: #133783;
  background-image: -moz-linear-gradient(top, #3b5998, #133783);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#3b5998), to(#133783));
  background-image: -webkit-linear-gradient(top, #3b5998, #133783);
  background-image: -o-linear-gradient(top, #3b5998, #133783);
  background-image: linear-gradient(to bottom, #3b5998, #133783);
  background-repeat: repeat-x;
  border-color: #133783 #133783 #091b40;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3b5998', endColorstr='#ff133783', GradientType=0);
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

.btn-facebook:hover,
.btn-facebook:focus,
.btn-facebook:active,
.btn-facebook.active,
.btn-facebook.disabled,
.btn-facebook[disabled] {
  color: #ffffff;
  background-color: #133783 !important;
  background-color: #102e6d !important;
}

.btn-facebook:active,
.btn-facebook.active {
  background-color: #0d2456 \9 !important;
}
</style>
