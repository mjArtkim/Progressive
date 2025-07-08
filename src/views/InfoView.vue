<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

// GSAP 플러그인 등록 (전역적으로 한 번만 등록하면 됩니다)
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin)
onMounted(() => {
  let smoother // smoother 변수를 밖으로 빼서 접근 가능하게 함

  // 1. 초기 투명도를 0으로 설정
  gsap.set('.images-pin-wrapper', { opacity: 0 })

  ScrollTrigger.create({
    onEnter: () => {
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
      })

      // 3. ScrollSmoother가 생성된 후 이미지를 나타나게 하는 애니메이션 추가
      gsap.to('.images-pin-wrapper', {
        opacity: 1, // 투명도를 1로 변경하여 보이게 합니다.
        duration: 2.5, // 1.5초 동안 서서히 나타납니다.
        ease: 'power1.out', // 부드러운 전환 효과를 줍니다.
      })

      // 이미지를 고정시키는 ScrollTrigger (위에 투명도 애니메이션과 별개로 작동)
      gsap.to('.images-pin-wrapper', {
        scrollTrigger: {
          trigger: '.images-pin-wrapper',
          start: 'center bottom', // 이미지 래퍼가 뷰포트 중앙에 닿을 때 고정 시작
          pin: true, // .images-pin-wrapper 요소를 고정
          pinSpacing: true, // 고정 공간 유지 (뒤의 내용이 밀려 내려옴)
          end: '+=700', // 900px 스크롤되는 동안 고정 유지 (조절 가능)
          // markers: true,
        },
      })
    },
  })
})
</script>

<template>
  <div id="smooth-wrapper">
    <div class="bar-box">
      <div class="bar-tit">DUBVISION</div>
      <div class="bar-tit">MATISSE & SADKO</div>
      <div class="bar-tit">THIRD PARTY</div>
      <div class="bar-tit">SICK INDIVIDUALS</div>
    </div>
    <div id="smooth-content">
      <section class="hero pad-l">
        <div class="images-pin-wrapper">
          <div class="images">
            <div class="bar bar1">
              <button class="but1" data-speed="clamp(1.1)"></button>
            </div>
            <div class="bar bar2">
              <button class="but2" data-speed="clamp(1.1)"></button>
              <button class="but3" data-speed="clamp(1.2)"></button>
            </div>
            <div class="bar bar2">
              <button class="but4" data-speed="clamp(1.3)"></button>
              <button class="but5" data-speed="clamp(1.2)"></button>
            </div>
            <div class="bar bar2">
              <button class="but6" data-speed="clamp(1.2)"></button>
              <button class="but7" data-speed="clamp(1.3)"></button>
            </div>
          </div>
        </div>
      </section>
      <section class="spacer"></section>
    </div>
  </div>
</template>

<style scoped lang="scss">
#smooth-wrapper {
  position: absolute !important;
  top: 50px !important;
  height: 100vh;
  overflow: hidden;
}

.pin-spacer {
  pointer-events: none;
}

.hero {
  min-height: 100vh;
}
.bar-box {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
}
.images {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
  align-items: stretch;
  justify-items: center;
  margin-top: 5rem;
}

.spacer {
  height: 100vh;
}

.bar2 {
  width: 100%;
  display: flex;
  padding: 0 10px; /* 직접 값 사용 */
  gap: 0 20px;
}
.bar-tit1 {
  width: 100%;
}
.bar-tit {
  width: 100%;
  padding: 0 10px; /* 직접 값 사용 */
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}
.bar {
  width: 100%;
  button {
    border-radius: 5px; /* 직접 값 사용 */
    width: 90%; /* 직접 값 사용 */
    height: 700px; /* 직접 값 사용 */
    color: white; /* 직접 값 사용 */
    position: relative;
    overflow: hidden;
    z-index: 1;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(105deg, #ffffff42, #ffffff77, #ffffff16); /* 직접 값 사용 */
      z-index: -1;
      margin: -1px; /* 직접 값 사용 */
      border-radius: 5px; /* 직접 값 사용 */
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 5px; /* 직접 값 사용 */
      z-index: -1;
      margin: 1px; /* 직접 값 사용 */
      background-position: center 30%;
      background-size: cover;
    }
    &.but1::after {
      background-image: url('@/assets/img/dub_1.png');
    }
    &.but2::after {
      background-image: url('@/assets/img/ms_1.png');
    }
    &.but3::after {
      background-image: url('@/assets/img/ms_2.png');
    }
    &.but4::after {
      background-image: url('@/assets/img/tp_1.png');
    }
    &.but5::after {
      background-image: url('@/assets/img/tp_2.png');
    }
    &.but6::after {
      background-image: url('@/assets/img/si_1.png');
    }
    &.but7::after {
      background-image: url('@/assets/img/si_2.png');
    }
  }
}
</style>
