<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const data = computed(() => store.getters.cartList)

const carItemCount = computed(() => store.getters.carItemCount)

</script>
<template>
    <div class="w-full">
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{{carItemCount}} Video</button>
        <ul class="w-80 space-y-2">
            <li v-for="item in data" :key="item.index" class="flex flex-row justify-between items-center">
                <span>{{ item.name }} - <a :href="item.url"><img :src="item.cover"></a> {{ item.description }}</span>
                <button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded whitespace-nowrap"
                @click.prevent="store.commit('removeItemFromCart', item.id)"
                >Remove</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>


</style>