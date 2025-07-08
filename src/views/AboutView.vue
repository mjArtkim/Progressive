<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const scrollPosition = ref(0)

// 배경 이미지의 스케일과 블러를 동적으로 계산하는 Computed 속성
const backgroundDynamicStyle = computed(() => {
  // --- 스케일 설정 ---
  const minScale = 1
  const maxScale = 1.2 // 최대 확대 비율
  const scaleScrollRange = window.innerHeight * 2 // 이 스크롤 범위 내에서 스케일 변화

  // 스크롤 위치에 따른 스케일 값 계산
  // 스크롤이 내려갈수록 minScale에서 maxScale로 증가
  const scale = minScale + (scrollPosition.value / scaleScrollRange) * (maxScale - minScale)

  // --- 블러 설정 ---
  const minBlur = 0 // 최소 블러 (선명한 상태)
  const maxBlur = 10 // 최대 블러 (픽셀 단위)
  const blurScrollRange = window.innerHeight * 2 // 이 스크롤 범위 내에서 블러 변화

  // 스크롤 위치에 따른 블러 값 계산
  // 스크롤이 내려갈수록 minBlur에서 maxBlur로 증가
  const blur = minBlur + (scrollPosition.value / blurScrollRange) * (maxBlur - minBlur)

  return {
    transform: `scale(${Math.min(maxScale, Math.max(minScale, scale))})`,
    filter: `blur(${Math.min(maxBlur, Math.max(minBlur, blur))}px)`, // 블러 값 제한 및 'px' 단위 추가
    transformOrigin: 'center center',
    // 스크롤에 따른 동적 변화이므로 transition은 부드러움을 위해 짧게 설정
    transition: 'transform 0.1s ease-out, filter 0.1s ease-out',
  }
})

// 스크롤 이벤트 핸들러
const handleScroll = () => {
  scrollPosition.value = window.scrollY
}

// 컴포넌트 마운트 및 언마운트 시 이벤트 리스너 설정/해제
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
