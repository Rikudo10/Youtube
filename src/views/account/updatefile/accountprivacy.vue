<script setup>
import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore()

const username = ref()
const email = ref()
const password = ref()

const registeruser = ()=> {
  store.dispatch("register/register",{username:username.value,email:email.value,password:password.value})
  console.log(store.state.register.user)
}

</script>
<template>
  <div class="flex items-center absolute top-20 right-[10%] justify-center w-[20%] h-[40%] bg-gray-100">
    <div>
      <h1 class="text-center text-lg font-bold text-gray-500">Form Register</h1>
      <div class="space-y-4 mt-6">
        <div class="w-full">
          <input v-model="username" type="text" placeholder="username" class="px-4 py-2 bg-gray-50" />
        </div>
        <div class="w-full">
          <input v-model="email" type="text" placeholder="email" class="px-4 py-2 bg-gray-50" />
        </div>
        <div  class="w-full">
          <input v-model="password" type="text" placeholder="password" class="px-4 py-2 bg-gray-50" />
        </div>
      </div>
      <button @click="registeruser" class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Register</button>
    </div>
  </div>
</template>

<style scoped>

</style>


