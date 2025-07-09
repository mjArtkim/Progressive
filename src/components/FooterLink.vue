<template>
  <a class="button" :href="href" target="_blank" rel="noopener noreferrer">
    <span class="actual-text">&nbsp;{{ name }}&nbsp;</span>
    <span class="hover-text">&nbsp;{{ name }}&nbsp;</span>
  </a>
</template>

<script setup>
defineProps({
  name: String,
  href: String,
})
</script>
