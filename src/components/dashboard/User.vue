<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";

const store = useStore();
const route = useRoute();

store.getters["register/getApiUrl", route.params.id] ;

const user = computed(() => store.getters["register/getApiUrl"]);
</script>

<template>
  <div class="m-[20px]">
    <div
        v-if="user.length !== 0"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    >
      {{ user }}
    </div>
    <div v-else>Loading</div>
  </div>
</template>