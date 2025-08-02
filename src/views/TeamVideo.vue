<template>
  <div class="ytc-box">
    <div class="ytc-inbtn">
      <button @click="handleClick" class="ytc-move">
        <div class="ytc-btn">
          <font-awesome-icon :icon="['fas', 'square-caret-down']" />
        </div>
      </button>
    </div>
    <div class="ytc">
      <div class="element" v-for="(videoId, index) in videoIds" :key="index">
        <iframe
          :src="`https://www.youtube.com/embed/${videoId}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import Flip from 'gsap/Flip'

gsap.registerPlugin(Flip)
const videoIds = [
  'aWOm_wGei7Q?si=KMDgDZdl-n2zxtpx',
  '2F-cUyKOqv0?si=-mqvXfOn4hKfJWEA',
  'Tf9dIMr7rOs?si=vG-C8aT275lB2ymq',
  'QlmIduFbr8g?si=_fBY45aawNazGhjI',
  'ftaaOUiIuOQ?si=IbcyhUoPtp-frTfH',
]
const currentIndex = ref(0)
let elementNodes = []

onMounted(() => {
  elementNodes = gsap.utils.toArray('.element')
  if (elementNodes[0]) {
    elementNodes[0].classList.add('grow')
  }
})

const handleClick = () => {
  const state = Flip.getState(elementNodes)
  elementNodes[currentIndex.value].classList.remove('grow')

  currentIndex.value = (currentIndex.value + 1) % elementNodes.length
  elementNodes[currentIndex.value].classList.add('grow')

  Flip.from(state, {
    duration: 1,
    ease: 'power1.inOut',
    absolute: true,
  })
}
</script>

<style scoped lang="scss">
.ytc-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.ytc {
  padding-bottom: 56.25%;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
iframe {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #797979;
}
.ytc .element {
  width: 100%;
  height: 8%;
  border-radius: 10px;
}
.ytc .element.grow {
  height: 100%;
}
.ytc-inbtn {
  position: absolute;
  top: 20px;
  right: 80px;
}
.ytc-move {
  position: relative;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.253);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
}

.ytc-btn {
  width: 20px;
  height: 20px;
  transition-duration: 0.3s;
  color: #fff;
  font-size: 20px;
}
@media (max-width: 600px) {
  .ytc-inbtn {
    position: absolute;
    top: 40px;
    right: 30px;
  }
}
@media (min-width: 601px) and (max-width: 1024px) {
  .ytc-inbtn {
    position: absolute;
    top: 10px;
    right: 80px;
  }
}
@media (min-width: 1025px) {
  .ytc-move:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(255, 255, 255);
    align-items: center;
  }

  .ytc-move:hover .ytc-btn {
    transition-duration: 0.3s;
    transform: translateY(210%);
  }

  .ytc-move::before {
    position: absolute;
    bottom: -20px;
    content: 'Move to Video';
    color: #000;
    font-size: 0px;
  }

  .ytc-move:hover::before {
    font-size: 13px;
    opacity: 1;
    bottom: unset;
    transition-duration: 0.3s;
  }
}
</style>
