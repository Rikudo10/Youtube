<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const route = useRoute()

const product = computed(() => {
    store.commit("products/GET_PRODUCT_BY_ID", +route.params.id)
    return store.getters["products/getactiveProduct"]
})


</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg mg-left">
  <img class="w-full" :src="product.cover">
  <div class="px-6 py-4">
    <div class="color font-bold text-xl mb-2">{{ product.name }}</div>
    <p class="text-gray-700 text-base">
     {{ product.description }}
    </p>
  </div>
</div>
</template>
<style scoped>
.color {
  color: white;
}
</style>