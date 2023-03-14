<script setup>
import axios from 'axios';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {ref} from "vue";

const store = useStore();
const router = useRouter();

const email = ref('');
const password = ref('');

const submitForm = async () => {
  const data = {
    email: email.value,
    password: password.value,
  };

  await axios.post('/auth/login', data).then(response => {
          if (response.data.status) {
            store.dispatch('register/token', response.data);
            router.push('/');
          }
        }).catch((e) => console.log(e));
};
</script>
<template>
  <div class="login">
    <h1 class="text-lg font-bold text-gray-500">Login</h1>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mydiv1 w-full">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" v-model="email" required class="px-4 py-2 bg-gray-50">
        </div>
        <div class="mydiv1 w-full">
          <label for="password" class="block text-gray-700 font-bold mb-2">Password:</label>
          <input type="password" id="password" v-model="password" required class="px-4 py-2 bg-gray-50">
        </div>
        <button type="submit"
          class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Login</button>
      </form>
    </div>
  </div>
</template>


<style scoped>
.mydiv1 {
  padding-bottom: 10px;
}

span {
  padding-left: 55px;
}

.login {
  margin-left: 682px;
  margin-top: 80px;
  width: 350px;
  height: 400px;
  background-color: lightcyan;
}

li {
  color: black;
}

p {
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
  border: 1px solid gray;
}</style>