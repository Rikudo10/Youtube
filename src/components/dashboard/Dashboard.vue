<script setup>
import { useStore } from "vuex";
import axios from "axios";


const store = useStore();

const apiurl = store.getters["register/getApiUrl"]

axios
    .get( apiurl)
    .then((response) => {
      console.log(response)
    })
</script>

<template>
  <div class="m-[10px]">
    <RouterLink
        to="/dashboard/users"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >Users</RouterLink
    >
  </div>
  <RouterView></RouterView>
</template>

