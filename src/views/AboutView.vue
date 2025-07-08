<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const scrollPosition = ref(0)

const backgroundScaleStyle = computed(() => {
  const minScale = 1
  const maxScale = 1.2 // 최대 확대 비율
  const scrollHeightToAffect = window.innerHeight * 2 // 이 높이만큼 스크롤했을 때 최대 확대에 도달

  const scale = minScale + (scrollPosition.value / scrollHeightToAffect) * (maxScale - minScale)

  return {
    transform: `scale(${Math.min(maxScale, Math.max(minScale, scale))})`,
    transformOrigin: 'center center',
    transition: 'transform 0.1s ease-out',
  }
})

const handleScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="background-image-wrapper" :style="backgroundScaleStyle"></div>
  <div class="about">
    <div class="about-box">
      <h1 class="main-tit">TEAM<br />PROGRESSIVE<br />HOUSE</h1>
      <ul class="main-txt">
        <li class="sub-txt">
          <p>Melodies that stir the soul, energy that awakens the spirit.</p>
          <p>The true masters of Progressive House.</p>
        </li>
        <li>
          <ol class="list-txt">
            <li>- DUBVISION</li>
            <li>- MATISSE&SADKO</li>
            <li>- THIRD PARTY</li>
            <li>- SICK INDIVIDUALS</li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; /* 자식 absolute 요소를 위한 기준점 */
  overflow: hidden !important;
}
.background-image-wrapper {
  position: absolute; /* .about 요소의 자식으로 절대 위치 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/bg_1.png');
  background-position: center;
  background-size: cover;
  z-index: -1; /* 다른 콘텐츠 뒤에 오도록 설정 */
  /* transform과 transition은 Vue 스크립트에서 동적으로 바인딩됩니다. */
  max-width: 100vw;
}
.about-box {
  position: relative;
  display: grid;
  min-height: 100vh;
}
.main-tit {
  position: absolute;
  top: 38%;
  left: 80px;
  font-size: 5em;
  font-weight: 700;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  line-height: 1.2;
  z-index: 3;
}
.main-txt {
  display: grid;
  align-content: center;
  grid-template-columns: 1.2fr 1fr;
  height: 42vh;
  font-family: 'NanumSquareRound';
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  align-self: end;
  padding-left: 80px;
}

.sub-txt p {
  font-size: 1.5em;
  color: #eee;
}
.list-txt {
  font-size: 1.1em;
  line-height: 2.3;
  color: #eee;
}
</style>
