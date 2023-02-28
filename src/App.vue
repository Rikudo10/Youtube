<script setup>
import NavBars from './components/menus/NavBars.vue'


</script>

<template>
<div class=" mx-auto text-center ">

<NavBars />
<router-view />
  </div>
</template>


<style>
  body {
    background-color: black;
  }
</style>
