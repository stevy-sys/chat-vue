<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-md-offset-12 text-center">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Connectez vous</h3>
          </div>
          <div class="panel-body">
            <form @submit.prevent="submit()" accept-charset="UTF-8" role="form">
              <fieldset>
                <div class="form-group">
                  <input v-model="form.name" class="form-control type_input" placeholder="name" name="email" type="text">
                </div>
                <div class="form-group">
                  <input v-model="form.email" class="form-control type_input" placeholder="yourmail@example.com"
                    name="email" type="text">
                </div>
                <div class="form-group">
                  <input v-model="form.password" class="form-control type_input" placeholder="Password" name="password"
                    type="password">
                </div>
                <div class="form-group">
                  <input v-model="form.confirm_password" class="form-control type_input" placeholder="Confirm Password"
                    name="password" type="password">
                </div>
                <input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
              </fieldset>
            </form>
            <label>
                <div> Have acount ? <RouterLink class="nav-link" to="/login">sign in</RouterLink></div>
              </label>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { register } from '../service/auth.service';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'

const router = useRouter()
const store = useStore()

const form = ref({
  name: '',
  email: '',
  password: '',
  confirm_password: '',
})

const submit = async () => {
  const response = await register(form.value)
  if (response.success) {
    store.dispatch('saveToken', response.data.token)
    store.dispatch('saveUser', response.data.user)
    store.dispatch('setConnected', true)
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
    router.push({ name: 'chat' })
  } else {
    alert(response.message)
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
  *background-color: #133783;
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
  *background-color: #102e6d !important;
}

.btn-facebook:active,
.btn-facebook.active {
  background-color: #0d2456 \9 !important;
}</style>