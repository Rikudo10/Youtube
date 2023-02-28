<script setup>


</script>

<template>

<div class="layout">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
           <slot name="footer"></slot>
      </footer>
    </div>
    
</template>