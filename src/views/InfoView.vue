<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

onMounted(() => {})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((st) => {})
})
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
              <div class="bar bar1">
                <button class="but1" data-speed="clamp(2.2)"></button>
              </div>
              <div class="bar bar2">
                <button class="but2" data-speed="clamp(1.3)"></button>
                <button class="but3" data-speed="clamp(2.1)"></button>
              </div>
              <div class="bar bar2">
                <button class="but4" data-speed="clamp(1.3)"></button>
                <button class="but5" data-speed="clamp(2.4)"></button>
              </div>
              <div class="bar bar2">
                <button class="but6" data-speed="clamp(2.1)"></button>
                <button class="but7" data-speed="clamp(1.3)"></button>
              </div>
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
    :hover {
    }
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
