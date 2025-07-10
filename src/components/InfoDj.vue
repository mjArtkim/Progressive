<template>
  <div class="djinfo">
    <div class="info-dj-overlay">
      <div class="over-tit">
        <h2>{{ props.djName }}</h2>
        <button @click="onCloseClick" class="close-btn">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </div>
      <div class="over-inner">
        <div class="over-img pc-over">
          <img
            v-if="props.djImageUrl"
            :src="props.djImageUrl"
            :alt="props.djName"
            class="dj-image"
          />
        </div>
        <div class="m-over">
          <div class="over-img">
            <img
              v-if="props.djImageUrl"
              :src="props.djImageUrl"
              :alt="props.djName"
              class="dj-image"
            />
          </div>
          <img v-if="props.djlogoImg" :src="props.djlogoImg" :alt="props.djName" class="dj-logo1" />
        </div>
        <div class="over-txt">
          <img v-if="props.djlogoImg" :src="props.djlogoImg" :alt="props.djName" class="dj-logo" />
          <div class="over-name">{{ props.djDescription }}</div>
          <div class="over-des">{{ props.djDescript2 }}</div>
          <div v-if="props.djsnsLink && props.djsnsLink.length > 0" class="sns-links">
            <div v-for="(links, index) in props.djsnsLink" :key="index" class="link-group">
              <a v-if="links.linkhome" :href="links.linkhome" target="_blank"
                ><font-awesome-icon :icon="['fas', 'house']"
              /></a>
              <a v-if="links.linkig" :href="links.linkig" target="_blank"
                ><font-awesome-icon :icon="['fab', 'instagram']"
              /></a>
              <a v-if="links.linkyout" :href="links.linkyout" target="_blank"
                ><font-awesome-icon :icon="['fab', 'youtube']"
              /></a>
              <a v-if="links.linkspot" :href="links.linkspot" target="_blank"
                ><font-awesome-icon :icon="['fab', 'spotify']"
              /></a>
              <a v-if="links.linkapple" :href="links.linkapple" target="_blank"
                ><font-awesome-icon :icon="['fab', 'apple']"
              /></a>
              <a v-if="links.linkfam" :href="links.linkfam" target="_blank"
                ><font-awesome-icon :icon="['fas', 'link']"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  djName: {
    type: String,
    required: true,
  },
  djDescription: {
    type: String,
    required: true,
  },
  djDescript2: {
    type: String,
    required: true,
  },
  djImageUrl: {
    type: String,
    default: '',
  },
  djsnsLink: {
    // snsLink (새로운 프롭스 - 배열 타입)
    type: Array as () => Array<{
      linkhome: string
      linkyout: string
      linkig: string
      linkspot: string
      linkapple: string
      linkfam: string
    }>,
    default: () => [],
  },
  djlogoImg: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close'])

const onCloseClick = () => {
  emit('close')
}
</script>

<style lang="scss">
.djinfo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: white;
  box-sizing: border-box;
  padding: 60px;
  overflow: hidden;
}

.info-dj-overlay {
  height: 100%;
  max-height: 800px;
  background: linear-gradient(
    165deg,
    rgba(0, 0, 0, 0.5),
    rgba(255, 255, 255, 0.15) 30%,
    rgba(0, 0, 0, 0.2),
    rgba(255, 255, 255, 0.08) 80%
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2),
    inset 0 0 8px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(140deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
}
.over-tit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 1.8em;
    font-weight: 700;
  }
  .close-btn {
    font-size: 2em;
    color: #fff;
    :hover {
      transform: rotate(90deg);
      transition: 0.2s ease-in-out;
      text-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.3);
    }
  }
}
.over-inner {
  height: 100%;
  max-height: 650px !important;
  display: flex;
}

.over-txt {
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dj-logo {
  width: 20%;
}
.over-name {
  font: 1.5em 'NanumSquareRound';
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.over-des {
  font: 1em 'NanumSquareRound';
  line-height: 2;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
.link-group {
  max-width: 400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  a {
    color: #ccc;
    font-size: 1.5em;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    :hover {
      color: #fff;
      text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.5);
      transition: 0.2s ease-in-out;
    }
  }
}
@media (max-width: 606px) {
  .dj-logo1 {
    display: none;
  }
}
@media (min-width: 607px) and (max-width: 1400px) {
  .m-over {
    display: flex;
  }
  .dj-logo1 {
    display: block;
    height: 130px;
    padding: 0 20px;
  }
}
@media (max-width: 1400px) {
  .djinfo {
    padding: 40px;
  }
  .info-dj-overlay {
    display: grid;
    max-height: 95vh;
    padding: 20px 20px;
  }
  .over-inner {
    display: flex;
    flex-direction: column;
  }
  .over-img {
    width: 100%;
    height: 130px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    img {
      object-fit: cover;
      object-position: 50% 20%;
      height: 100%;
      width: 100%;
    }
  }
  .dj-logo {
    display: none;
  }
  .over-txt {
    height: 100%;
    justify-content: space-around;
  }
  .over-des {
    max-height: 300px;
    line-height: 1.8;
    overflow: auto;
  }
  .over-tit {
    h2 {
      font-size: 1.2em;
    }
  }
  .over-txt {
    padding-left: 0px;
  }
  .over-name {
    font: 1.1em 'NanumSquareRound';
  }
  .pc-over {
    display: none;
  }
}
@media (min-width: 1401px) {
  .dj-logo1 {
    display: none;
  }
  .dj-logo {
    display: block;
  }
  .m-over {
    display: none;
  }
  .over-img {
    width: 100%;
    height: 100%;
    max-height: 650px !important;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    img {
      height: 100%;
      max-height: 650px !important;
    }
  }
}
</style>
