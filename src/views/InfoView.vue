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

  ScrollTrigger.create({
    trigger: 'body', // 페이지 전체를 기준으로
    start: 'top top-=100vh', // 뷰포트 상단에서 100vh 아래로 스크롤했을 때
    once: true, // 한 번만 실행
    onEnter: () => {
      // 100vh 스크롤이 지난 후에 ScrollSmoother를 생성
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 2,
        effects: true,
      })

      // 여기서 원래 애니메이션들도 함께 초기화
      gsap.from('.draw', {
        drawSVG: '0%',
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.heading',
          start: 'top top', // ScrollSmoother가 이미 활성화된 상태이므로 relative하게 'top top'
          scrub: true,
          pin: '.pin',
          pinSpacing: false,
          // markers: true,
        },
      })
      gsap.from('.images img', {
        y: '100vh', // 이미지가 뷰포트 아래에서 시작
        opacity: 0,
        stagger: 0.2, // 여러 이미지에 시간차 적용
        scrollTrigger: {
          trigger: '.images',
          start: 'top bottom', // 이미지가 뷰포트에 들어올 때 시작
          end: 'center center', // 이미지가 뷰포트 중앙에 도달할 때 애니메이션 종료 (즉, 그 위치에 멈춤)
          scrub: true, // 스크롤에 따라 부드럽게 움직임
          // markers: true,
        },
      })
      gsap.set('.logo svg', { opacity: 1 })
    },
  })
})
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <section class="hero pad-l">
        <div class="heading">
          <div class="pin">
            <h1>
              <span class="clamp"
                >Clamp
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 842.14 500"
                >
                  <path
                    class="draw"
                    d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47"
                    fill="none"
                    stroke="#8486aa"
                    stroke-miterlimit="10"
                    stroke-width="8"
                  />
                </svg> </span
              ><span class="yt">your triggers</span>
            </h1>
          </div>
        </div>
        <div class="images">
          <img
            data-speed="clamp(2.4)"
            src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400"
            alt=""
          />
          <img
            data-speed="clamp(1.8)"
            src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400"
            alt=""
          />
        </div>
      </section>
      <section class="spacer"></section>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@700&display=swap');

#smooth-wrapper {
  position: absolute !important;
  top: 0 !important;
  height: 100vh;
}

.pin-spacer {
  pointer-events: none;
}

:root {
  --f-5-min: 30;
  --f-5-max: 120;
  --step-5: calc(
    ((var(--f-5-min) / 16) * 1rem) + (var(--f-5-max) - var(--f-5-min)) * var(--fluid-bp)
  );
}
.hero {
  min-height: 100vh;
}

.logo {
  width: 150px;
  max-width: 40vw;
  filter: invert(1);
}

.images {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: stretch;
  justify-items: center;
  margin-top: 2rem;
}

.spacer {
  height: 100vh;
}

.clamp {
  position: relative;
  z-index: -1;
}
.yt {
  z-index: 3;
}

.clamp svg {
  position: absolute;
  width: 112%;
  top: 0;
  top: 50%;
  transform: translateY(-0%) rotate(2deg);
  left: -6%;
}

.heading {
  position: relative;
  z-index: 2;
  mix-blend-mode: difference;
  perspective: 1000px;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  transform: rotate(0.1deg);
}
.images {
  z-index: -1;
}

.logo svg {
  opacity: 0;
}
</style>
