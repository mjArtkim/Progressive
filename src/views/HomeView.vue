<script setup lang="ts">
import AboutView from '@/views/AboutView.vue'
import InfoView from '@/views/InfoView.vue'
</script>

<template>
  <div class="about-box">
    <AboutView></AboutView>
  </div>
  <div class="info-box">
    <InfoView></InfoView>
  </div>
</template>

<style>
.about-box {
  height: 100vh;
}
.info-box {
  position: relative;
  min-height: 100vh;
}
</style>
