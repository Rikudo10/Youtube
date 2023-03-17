<script setup>
import {computed, onMounted} from 'vue'
import { initFlowbite } from 'flowbite'
import {useStore} from "vuex";

const store = useStore()
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
const getAvatar = computed(() => store.getters['register/getUserAvatar']);
const getUserName = computed(() => store.getters['register/getUserName']);
const getEmail = computed(() => store.getters['register/getEmail']);
const logOut = () => {
  localStorage.clear()
}

</script>

<template>


  <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex items-center text-sm font-medium  rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
    <span class="sr-only">Open user menu</span>
    <img v-if="getAvatar" :src="getAvatar" alt="avatar" class="w-8 h-8 mr-2 rounded-full" />
    <img v-else class="w-8 h-8 mr-2 rounded-full" src="data:image/png;base64,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" alt="user photo">
    <p v-if="getEmail" >{{ getUserName }}</p>
    <p v-else > Log in </p>
    <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>

  <!-- Dropdown menu -->
  <div id="dropdownAvatarName" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div class="font-medium ">Account</div>
      <div v-if="getEmail" class="truncate">{{ getEmail }}</div>
      <div v-else class="truncate">Sing In</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
      <div v-if="!getEmail">
      <router-link to="/settings/registration">
        <li>
          <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Registration</span>
          </a>
        </li>
      </router-link>
      </div>
      <div v-if="!getEmail">
      <router-link to="/settings/login">
        <li>
          <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Login</span>
          </a>
        </li>
      </router-link>
  </div>
    </ul>
    <div v-if="getEmail" class="py-2">
      <a @click="logOut" href=""
         class=" bg-red-600 text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Log
        Out</a>
    </div>
  </div>


</template>