<script setup>
import axios from "axios";
import {useStore} from "vuex";

const store = useStore()

axios
    .get('api_key')
    .then((response) => {
      console.log(response)
    })

</script>

<template>

</template>

<style>
 body {
   background-color: white;
 }
</style>
