<script setup>
import {useStore} from 'vuex'

const store = useStore()
const search = ""
const ChangeSearch = (e) => store.commit('products/ChangeSearch', e.target.value)

</script>

<template>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mydiv2">
    <div class="text-sm lg:flex-grow">
      <input type="text" placeholder="ძიება" v-model="search" @input="ChangeSearch" class=" mysearch">
      <button type="submit" class="buttonsearch absolute  p-2.5 text-sm font-medium text-white">
        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <span class="sr-only">Search</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.buttonsearch {
  margin-left: -63px;
  height: 40px;
  width: 64px;
  border-radius: 0 40px 40px 0;
  background-color: #616161;
  border: 1px solid rgb(119, 118, 118);
}
.mydiv2 {
  padding-right: 220px;
}

.mysearch {
  width: 495px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  color: white;
  background-color: black;
  border: 1px solid rgb(119, 118, 118);
  padding-left: 20px;
}
</style>