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
import InfoDjVue from '@/components/InfoDj.vue'
import TeamVideoVue from '@/views/TeamVideo.vue'
import { djData } from '@/data/djData'
import type { SnsLink } from '@/data/djData'
const currentDjInfo = ref({
  name: '',
  description: '',
  descript2: '',
  imageUrl: '',
  logoImg: '',
  djsnsLink: [] as SnsLink[], // SnsLink[] 타입으로 명확히 지정
})
const showInfoDj = ref(false)

const handleShowInfoDj = (djId: string) => {
  const selectedDj = djData[djId]
  if (selectedDj) {
    currentDjInfo.value = {
      name: selectedDj.name,
      description: selectedDj.description,
      descript2: selectedDj.descript2,
      imageUrl: selectedDj.imageUrl || '',
      logoImg: selectedDj.logoImg || '', // <--- logoImg 값 할당
      djsnsLink: selectedDj.snsLink || [], // <--- snsLink 값 할당
    }
    showInfoDj.value = true
  } else {
    console.warn(`DJ 정보를 찾을 수 없습니다: ${djId}`)
  }
}

const closeInfoDj = () => {
  showInfoDj.value = false
  // 닫을 때 정보 초기화 (선택 사항)
  currentDjInfo.value = {
    name: '',
    description: '',
    descript2: '',
    imageUrl: '',
    djsnsLink: [] as SnsLink[],
    logoImg: '',
  }
}

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
  <InfoDjVue
    v-if="showInfoDj"
    :djName="currentDjInfo.name"
    :djDescription="currentDjInfo.description"
    :djDescript2="currentDjInfo.descript2"
    :djImageUrl="currentDjInfo.imageUrl"
    :djlogoImg="currentDjInfo.logoImg"
    :djsnsLink="currentDjInfo.djsnsLink"
    @close="closeInfoDj"
  ></InfoDjVue>

  <div id="smooth-wrapper-global">
    <div id="smooth-content-global">
      <div class="about-box">
        <AboutView></AboutView>
      </div>
      <section class="wrap">
        <div class="info-box">
          <InfoView @show-dj-info="handleShowInfoDj"></InfoView>
        </div>
      </section>
      <div class="music-container">
        <div>
          <h2 class="music-big-tit">TEAM PROGRESSIVE HOUSE MUSIC</h2>
        </div>
        <MusicViewVue></MusicViewVue>
      </div>
      <div class="video-container">
        <h2 class="music-big-tit">TEAM VIDEO</h2>
        <div class="video-list">
          <TeamVideoVue></TeamVideoVue>
        </div>
      </div>
      <div class="foot-container">
        <FooterVue></FooterVue>
      </div>
    </div>
  </div>
</template>

<style>
#smooth-wrapper-global {
  /* overflow-x: hidden !important; */
}
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
.video-container {
  position: relative;
  width: 100%;
  height: 80vh;
  margin: 0 auto 80px;
  padding: 0 80px;
  min-height: 870px;
}
.video-list {
  overflow: auto;
  display: grid;
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
@media (max-width: 600px) {
  .music-container {
    padding: 30px;
    min-height: 80vh;
    height: 100%;
  }
  .video-container {
    width: 100%;
    height: 100vh;
    margin: 0 auto 80px;
    padding: 30px;
  }
}

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
