<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()
const info = computed(() => store.getters["register/info"] )
</script>
<template>
  <div>
    <h1>Account Settings</h1>
    <div>
      <ul>
        <li v-for="test in info" :key="test">
          <p>{{test.username}}</p>
          <p>{{test.password}}</p>
          <p>{{test.email}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  color: white;
}
h1 {
  color: white;
  font-size: 25px;
}
</style>