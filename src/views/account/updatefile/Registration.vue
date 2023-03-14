<script setup>
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const store = useStore();
const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

const submitForm = async () => {
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  await axios.post('/auth/register', data).then(response => {
      if (response.data.status) {
        store.dispatch('register/token', response.data);
        router.push('/');
      }
    }).catch((e) => console.log(e));
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
          <div class="w-full">
            <label for="password">Password:</label>
            <input class="px-4 py-2 bg-gray-50" type="password" id="password" v-model="password" required>
          </div>
        </div>
        <button class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
          type="submit">Register</button>
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


