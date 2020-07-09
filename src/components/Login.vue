<template>
  <div id="login">
    <input
      type="text"
      v-model="email"
      placeholder="Email address"
      class="input"
      required>
    <br/>
    <input
      type="password"
      v-model="password"
      placeholder="Password"
      class="input"
      required>
    <br/>
    <button v-on:click="login" class="button">Enter</button>
  </div>
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          this.$router.push('/dashboard')
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }
}
</script>

<style>

</style>
