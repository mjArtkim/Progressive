<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const scrollPosition = ref(0)

const backgroundDynamicStyle = computed(() => {
  const minScale = 1
  const maxScale = 1.2
  const scaleScrollRange = window.innerHeight * 2

  const scale = minScale + (scrollPosition.value / scaleScrollRange) * (maxScale - minScale)

  const minBlur = 0
  const maxBlur = 10
  const blurScrollRange = window.innerHeight * 2

  const blur = minBlur + (scrollPosition.value / blurScrollRange) * (maxBlur - minBlur)

  return {
    transform: `scale(${Math.min(maxScale, Math.max(minScale, scale))})`,
    filter: `blur(${Math.min(maxBlur, Math.max(minBlur, blur))}px)`,
    transformOrigin: 'center center',
    transition: 'transform 0.1s ease-out, filter 0.1s ease-out',
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
  <div class="background-image-wrapper" :style="backgroundDynamicStyle"></div>
  <div class="about">
    <div class="about-box">
      <h1 class="main-tit" data-aos="fade-up">TEAM<br />PROGRESSIVE<br />HOUSE</h1>
      <ul class="main-txt">
        <li class="sub-txt" data-aos="fade-right" data-aos-easing="ease-in-sine">
          <p>Melodies that stir the soul, energy that awakens the spirit.</p>
          <p>The true masters of Progressive House.</p>
        </li>
        <li>
          <ol class="list-txt" data-aos="fade-left">
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
  position: relative;
  overflow: hidden !important;
  overflow-x: hidden !important;
}
.background-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/bg_1.png');
  background-position: center;
  background-size: cover;
  z-index: -1;
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

/* 작은 모바일 (300px 이하) */
@media (max-width: 320px) {
}

/* 모바일 (320px 이상) */
@media (min-width: 321px) {
  /* 스타일 정의 */
}

/* 작은 태블릿 (600px 이하) */
@media (max-width: 600px) {
  .main-tit {
    top: 24% !important;
    font-size: 2.5em !important;
    left: 20px;
    padding-right: 20px;
  }
  .main-txt {
    padding: 0 20px;
  }
  .sub-txt {
    margin-bottom: 20px;
  }
  .sub-txt p {
    font-size: 1em;
  }
  .list-txt {
    font-size: 0.9em;
  }
}

/* 중간 크기 태블릿 (768px 이하) */
@media (max-width: 768px) {
  /* 스타일 정의 */
}
@media (min-width: 809px) and (max-width: 1023px) {
  .background-image-wrapper {
    background-position: top !important;
  }
}

/* 큰 태블릿 (1024px 이하) */
@media (max-width: 1024px) {
  .background-image-wrapper {
    background-image: url('@/assets/img/mbg_1.png');
    background-position: bottom;
  }
  .main-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
  }
  .main-tit {
    position: absolute;
    top: 38%;
    left: 30px;
    font-size: 4em;
  }
}
/* 큰 태블릿 (1024px 이하) */
@media (max-width: 1200px) {
}
</style>
