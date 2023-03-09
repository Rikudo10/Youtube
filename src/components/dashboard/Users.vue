<script setup>
import { useStore } from "vuex";

const store = useStore();

store.getters["register/getApiUrl"];

const users = store.getters["register/getApiUrl"];
</script>

<template>
  <ul class="m-[10px] flex flex-wrap">
    <RouterLink :to="`/dashboard/users/${u.id}`" v-for="u in users">
      <li
          class="m-[5px] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        <img :src="u.avatar" class="w-[100px] h-[100px]" />
        <p>{{ u.name }}</p>
      </li>
    </RouterLink>
  </ul>
  <RouterView></RouterView>
</template>