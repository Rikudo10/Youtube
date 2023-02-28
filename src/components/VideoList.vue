<script setup>
import Video from './Video.vue';
import { useStore } from 'vuex'
import { computed } from 'vue'


const store = useStore()
const filteredPost = computed(() => store.getters['products/filteredPost'])
const categories = store.getters["categories/getCategories"]
const changeCategoryId = (id) => store.commit('products/changeCategoryId', id)

</script>
<template>
  <div class="mtavari w-full">
    <div>
      <nav class="mynav bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
              class="menuul flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li v-for="category in categories" :key="category.id" @click="changeCategoryId(category.id)">
                <a href="#"
                  class="mya block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{{
                    category.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
    <ul class="myul">
      <div class="div1 p-10 grid grid-cols-4 gap-4">
        <li v-for="item in filteredPost" :key="item.index" class="justify-between items-center">
          <Video :item="item" />
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.mya:hover {
  background-color: rgb(117, 116, 116);
}

.mya {
  height: 32px;
  border: none;
  width: 92px;
  background-color: #272727;
}

.mynav {
  background-color: black;
}

.menuul {
  padding-left: 170px;
  background-color: black;
  color: white;
}

.name {
  color: white;
  padding-right: 150px;
}

.menubar:hover {
  color: black;
  background-color: white;
}

.div1 {
  padding-left: 170px;
}


.menu {
  height: 1100px;
  width: 10px;
  position: fixed;
  color: white;
  top: 250px;
}

.myrouter {
  padding: 20px;
  color: white;
  font-size: larger;
  display: flex;
  flex-wrap: wrap;
}

.myrouter:hover {
  color: red;
}

.mtavari {
  padding-bottom: 50px;
  height: 20px;
}
</style>
