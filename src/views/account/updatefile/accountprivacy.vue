<script >

export default {
  props: {
    nickname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  }
}
</script>
<template>
  <div class="card">
    <div class="nickname">nickname</div>
    <div class="email">email</div>
  </div>
</template>