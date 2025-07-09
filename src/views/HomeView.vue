<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue' // onMounted, onUnmounted, ref 추가
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin' // 필요하다면
import AboutView from '@/views/AboutView.vue'
import InfoView from '@/views/InfoView.vue'
import MusicViewVue from '@/views/MusicView.vue'
import FooterVue from '@/views/Footer.vue'

// GSAP 플러그인 등록은 전역적으로 한 번만 하면 됩니다.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin)

let smoother: ScrollSmoother | null = null

onMounted(() => {
  smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper-global',
    content: '#smooth-content-global',
    smooth: 2,
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
      <div class="foot-container">
        <FooterVue></FooterVue>
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
  width: 100%;
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
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.logo-container img {
  width: 20%;
  padding: 0 10px;
}
.foot-container {
  border-top: 1px solid #aaa;
  padding: 20px 0;
}
/* 작은 모바일 (300px 이하) */
@media (max-width: 320px) {
}

/* 모바일 (320px 이상) */
@media (min-width: 321px) {
  /* 스타일 정의 */
}

/* 작은 태블릿 (600px 이하) */
@media (max-width: 600px) {
  .music-container {
    padding: 30px;
    min-height: 80vh;
    height: 100%;
  }
}

/* 중간 크기 태블릿 (768px 이하) */
@media (max-width: 768px) {
  /* 스타일 정의 */
}

/* 큰 태블릿 (1024px 이하) */
@media (max-width: 1024px) {
  .wrap {
    padding: 0 20px;
  }
  .logo-container {
    height: 30vh;
  }
  .logo-container img {
    width: 25%;
    padding: 0 10px;
  }
  .music-container {
    min-height: 80vh;
    height: 100%;
    margin-bottom: 20px;
  }
  .music-big-tit {
    width: 100%;
    font-size: 2em;
  }
}
/* 큰 태블릿 (1024px 이하) */
@media (min-width: 1025px) and (max-width: 1400px) {
  .wrap {
    width: 100%;
    padding: 0 30px;
  }
  .music-container {
    width: 100%;
    height: 80vh;
    margin: auto;
    padding: 0 30px;
  }
  .main-tit {
    position: absolute;
    left: 80px;
    font-size: 4.2em;
  }
}
</style>
