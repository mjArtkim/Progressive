<script setup lang="ts">
import AboutView from '@/views/AboutView.vue'
import InfoView from '@/views/InfoView.vue'
</script>

<template>
  <div class="about-box">
    <AboutView></AboutView>
  </div>
  <section class="wrap">
    <div class="info-box">
      <InfoView></InfoView>
    </div>
  </section>
</template>

<style>
.about-box {
  height: 100vh;
}
.info-box {
  position: relative;
  min-height: 100vh;
  margin-top: 50px;
}
.wrap {
  padding: 0 80px;
}
</style>
