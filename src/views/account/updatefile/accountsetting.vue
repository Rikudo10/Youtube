<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()
const info = computed(() => store.getters["register/info"] )
</script>
<template>
  <div class="login">
    <h1 class="text-lg font-bold text-gray-500">Account Settings</h1>
    <div>
      <ul>
        <li v-for="test in info" :key="test">
          <p>Username<span>{{test.username}}</span></p>
          <p>Password<span>{{test.password}}</span></p>
          <p>Email<span>{{test.email}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
span {
  padding-left: 55px;
}
.login {
  margin-left: 682px;
  margin-top: 80px;
  width: 350px;
  height: 400px;
  background-color: lightcyan;
}

li {
  color: black;
}
p {
  padding-left: 20px;
 padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
  border: 1px solid gray;
}
</style>