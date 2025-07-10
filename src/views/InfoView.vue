<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
const emit = defineEmits(['show-dj-info'])
onMounted(() => {})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((st) => {})
})
const text = ref(' TEAM PROGRESSIVE HOUSE ')
const showDjInfoById = (djId: string) => {
  emit('show-dj-info', djId)
}
</script>

<template>
  <div class="info-view-container">
    <div class="logo-container">
      <img src="@/assets/img/dub_logo.png" />
      <img src="@/assets/img/ms_logo.png" />
      <img src="@/assets/img/tp_logo.png" />
      <img src="@/assets/img/sick_logo.png" />
    </div>
    <div class="info-view-inner-wrapper">
      <div class="bar-box">
        <div class="bar-tit">DUBVISION</div>
        <div class="bar-tit">MATISSE & SADKO</div>
        <div class="bar-tit">THIRD PARTY</div>
        <div class="bar-tit">SICK INDIVIDUALS</div>
      </div>
      <div class="info-view-inner-content">
        <section class="hero pad-l">
          <div class="images-pin-wrapper">
            <div class="images">
              <div class="bar bar3">
                <div class="mo-tit">DUBVISION</div>
                <button
                  class="but1"
                  data-speed="clamp(1.2)"
                  @click="showDjInfoById('dubvision')"
                ></button>
                <button
                  class="but1-1"
                  data-speed="clamp(2.1)"
                  @click="showDjInfoById('dubvision')"
                ></button>
              </div>
              <div class="bar bar2">
                <div class="mo-tit">MATISSE & SADKO</div>
                <button
                  class="but2"
                  data-speed="clamp(1.3)"
                  @click="showDjInfoById('matisseSadko')"
                ></button>
                <button
                  class="but3"
                  data-speed="clamp(2.1)"
                  @click="showDjInfoById('matisseSadko')"
                ></button>
              </div>
              <div class="bar bar2">
                <div class="mo-tit">THIRD PARTY</div>
                <button
                  class="but4"
                  data-speed="clamp(1.3)"
                  @click="showDjInfoById('thirdParty')"
                ></button>
                <button
                  class="but5"
                  data-speed="clamp(2.4)"
                  @click="showDjInfoById('thirdParty')"
                ></button>
              </div>
              <div class="bar bar2">
                <div class="mo-tit">SICK INDIVIDUALS</div>
                <button
                  class="but6"
                  data-speed="clamp(1.3)"
                  @click="showDjInfoById('sickIndividuals')"
                ></button>
                <button
                  class="but7"
                  data-speed="clamp(2.1)"
                  @click="showDjInfoById('sickIndividuals')"
                ></button>
              </div>
            </div>
          </div>
          <div class="main-secound">
            <div class="marquee-content">
              <span v-for="n in 6" :key="n">{{ text }}</span>
            </div>
          </div>
        </section>
        <section class="spacer"></section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#smooth-wrapper {
  height: 100vh;
  overflow: hidden;
}
.pin-spacer {
  pointer-events: none;
}

.hero {
  max-width: 100vw !important;
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
.main-secound {
  position: absolute;
  left: 0;
  width: 100%;
  height: 12vh;
  margin-top: 30px;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  cursor: default;
}

.marquee-content {
  font-size: clamp(3rem, 5vw, 6vw);
  font-weight: 900;
  text-shadow: 0px 0px 25px rgba(0, 0, 0, 0.9);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #eee;
  color: #0f0f0f;
  display: inline-block;
  animation: scroll-left 25s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.spacer {
  height: 0vh;
}

.bar2 {
  width: 100%;
  display: flex;
  padding: 0 10px;
  gap: 0 20px;
}
.bar-tit1 {
  width: 100%;
}
.bar-tit {
  width: 100%;
  padding: 0 10px;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}
.bar {
  width: 100%;
  button {
    border-radius: 5px;
    width: 90%;
    height: 700px;
    color: white;
    position: relative;
    overflow: hidden;
    z-index: 1;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(105deg, #ffffff42, #ffffff77, #ffffff16);
      z-index: -1;
      margin: -1px;
      border-radius: 5px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 5px;
      z-index: -1;
      margin: 1px;
      background-position: center 30%;
      background-size: cover;
    }
    &.but1::after {
      background-image: url('@/assets/img/dub_1.png');
    }
    &.but1-1::after {
      background-image: url('@/assets/img/dub_3.png');
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
/* 작은 모바일 (300px 이하) */
@media (max-width: 320px) {
}

/* 모바일 (320px 이상) */
@media (min-width: 321px) {
  /* 스타일 정의 */
}

/* 작은 태블릿 (600px 이하) */
@media (max-width: 600px) {
  .bar3 {
    width: 100%;
    display: flex;
    padding: 0 10px;
    gap: 0 20px;
  }
  .bar {
    button {
      &.but1::after {
        background-image: url('@/assets/img/dub_2.png');
      }
      &.but1-1::after {
        background-image: url('@/assets/img/dub_3.png');
      }
    }
  }
}

/* 중간 크기 태블릿 (768px 이하) */
@media (max-width: 808px) {
  .bar3 {
    width: 100%;
    display: flex;
    padding: 0 10px;
    gap: 0 20px;
  }
  .images {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
  }
  .mo-tit {
    display: block;
    writing-mode: vertical-rl;
    color: #eee;
    font-weight: 600;
  }
  .bar-box {
    display: none;
  }
  .but1-1 {
    display: block;
  }
  .main-secound {
    margin-top: -80px;
  }
}

/* 큰 태블릿 (1024px 이하) */
@media (min-width: 809px) {
  .mo-tit {
    display: none;
  }
  .but1-1 {
    display: none !important;
  }
}
@media (min-width: 1025px) {
}
/* 큰 태블릿 (1024px 이하) */
@media (min-width: 1401px) {
  .bar {
    button {
      &:hover {
        &::before {
          background: linear-gradient(105deg, #ffffff77, #ffffffaa, #ffffff44);
        }
        &::after {
          filter: brightness(1.1);
        }
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
      }
    }
  }
}
</style>
