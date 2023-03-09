<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      axios.post('https://items.magischer.de/api/auth/register', data)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
          });
    }
  }
}
</script>
<template>
  <div class="login flex items-center absolute top-20 right-[10%] justify-center w-[20%] h-[40%] bg-blue-100">
    <div>
      <form @submit.prevent="submitForm">
      <h1 class="text-center text-lg font-bold text-gray-500">Sign Up</h1>
      <div class="space-y-4 mt-6">
        <div class="w-full">
          <label for="name">Name</label>
          <input class="px-4 py-2 bg-gray-50" type="text" id="name" v-model="name" required>
        </div>
        <div class="w-full">
          <label for="email">Email:</label>
          <input class="px-4 py-2 bg-gray-50" type="email" id="email" v-model="email" required>
        </div>
        <div  class="w-full">
          <label for="password">Password:</label>
          <input class="px-4 py-2 bg-gray-50" type="password" id="password" v-model="password" required>
        </div>
      </div>
        <button class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight" type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 350px;
  margin-right: 350px;
  margin-bottom: 150px;
}
</style>


