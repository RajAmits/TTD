<template>
  <div>
 <h1>Register</h1>
  <input type="email" name="email" v-model="email" placeholder="Enter an Email" /><br> <br>
  <input type="password" name="password" v-model="password" placeholder="Enter Password" /><br> <br>
  <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<style>
</style>
