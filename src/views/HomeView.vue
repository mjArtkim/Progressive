<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue' // onMounted, onUnmounted, ref 추가
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin' // 필요하다면
import AboutView from '@/views/AboutView.vue'
import InfoView from '@/views/InfoView.vue'
import MusicViewVue from '@/views/MusicView.vue'

// GSAP 플러그인 등록은 전역적으로 한 번만 하면 됩니다.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin)

let smoother: ScrollSmoother | null = null

onMounted(() => {
  // `body`가 아닌 `HomeView`의 전체 콘텐츠를 감싸는 요소를 wrapper로 사용
  smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper-global', // HomeView의 최상위 wrapper ID
    content: '#smooth-content-global', // HomeView의 모든 콘텐츠를 감싸는 ID
    smooth: 2, // 초 설정 (예: 2초)
    effects: true,
  })
})

onUnmounted(() => {
  if (smoother) {
    smoother.kill()
    smoother = null
    console.log('Global ScrollSmoother killed')
  }
  ScrollTrigger.getAll().forEach((st) => st.kill())
})
</script>

<template>
  <div id="smooth-wrapper-global">
    <div id="smooth-content-global">
      <div class="about-box">
        <AboutView></AboutView>
      </div>
      <section class="wrap">
        <div class="info-box">
          <InfoView></InfoView>
        </div>
      </section>
      <div class="music-container">
        <div>
          <h2 class="music-big-tit">TEAM PROGRESSIVE HOUSE MUSIC</h2>
        </div>
        <MusicViewVue></MusicViewVue>
      </div>
    </div>
  </div>
</template>

<style>
.about-box {
  height: 100vh;
}
.info-box {
  min-height: 100vh;
  margin-top: 80px;
}
.wrap {
  padding: 0 80px;
}
.music-container {
  width: 100%;
  height: 80vh;
  margin: auto;
  padding: 0 80px;
}
.music-big-tit {
  font-size: 3.5em;
  margin-bottom: 30px;
  font-family: 'Orbitron';
  font-weight: 800;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.logo-container {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
