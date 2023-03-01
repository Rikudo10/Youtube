<script>
export default {
  data() {
    return {
      nickname: '',
      email: ''
    }
  },
  methods: {
    submitForm() {
      console.log('Submitted:', this.nickname, this.email)
    }
  }
}
</script>
<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="nickname">Nickname:</label>
      <input type="text" id="nickname" v-model="nickname" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <button type="submit">Submit</button>
  </form>
</template>
