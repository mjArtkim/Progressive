<template>
  <div class="music-warp">
    <div class="music" v-for="(music, index) in musicList" :key="index">
      <div class="card" :style="{ backgroundImage: `url(${getImageUrl(music.bgImage)})` }">
        <div class="content-box">
          <div class="card-title">{{ music.title }}</div>
          <div class="card-content">{{ music.artists }}</div>
          <div class="card-content">{{ music.date }}</div>
          <div class="card-content">{{ music.label }}</div>
          <div class="music-box">
            <a
              v-for="platform in music.links"
              :key="platform.name"
              class="music-link"
              :href="platform.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon :icon="['fab', platform.name]" />
            </a>
          </div>
        </div>
        <div class="date-box">
          <img v-for="(logo, idx) in music.logos" :key="idx" :src="getImageUrl(logo)" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
function getImageUrl(filename) {
  return new URL(`/src/assets/img/${filename}`, import.meta.url).href
}

const musicList = [
  {
    title: 'Endless Dreamers',
    artists: 'DUBVISION & SICK INDIVIDUALS',
    date: '2025.06.06',
    label: 'STMPD RCRDS B.V.',
    links: [
      { name: 'apple', url: 'https://music.apple.com/kr/album/endless-dreamers-single/1813434080' },
      {
        name: 'spotify',
        url: 'https://open.spotify.com/track/3uIKJc5B8D0iil6i1Dl2pM?si=f0a3abebb25f44d3',
      },
      { name: 'youtube', url: 'https://youtu.be/OR6hC3261Sw?si=bOqVAnLW7uVJI07c' },
    ],
    logos: ['dub_logo.png', 'sick_logo.png'],
    bgImage: 'music_1.png',
  },
  {
    title: 'Take Me There',
    artists: 'MATISSE SADKO & THIRD PARTY & SICK INDIVIDUALS',
    date: '2025.07.11',
    label: '1001 RECORDINGS',
    links: [
      { name: 'apple', url: '' },
      { name: 'spotify', url: '' },
      { name: 'youtube', url: '' },
    ],
    logos: ['ms_logo.png', 'tp_logo.png', 'sick_logo.png'],
    bgImage: 'music_2.png',
  },
  {
    title: 'Keep Holding on to me',
    artists: 'DUBVISION & THIRD PARTY',
    date: '2025.00.00',
    label: 'STMPD RCRDS B.V.',
    links: [
      { name: 'apple', url: '' },
      { name: 'spotify', url: '' },
      { name: 'youtube', url: '' },
    ],
    logos: ['dub_logo.png', 'tp_logo.png'],
    bgImage: 'music_3.png',
  },
]
</script>

<style>
.music-warp {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.music {
  width: 100%;
  height: 450px;
  perspective: 1000px;
}

.card {
  padding-top: 50px;
  display: grid;
  transform-style: preserve-3d;
  background-size: cover;
  background-position:
    0 0,
    0 0;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.7) -10px 20px 20px -10px;
  transition: all 0.5s ease-in-out;
}

.card:hover {
  background-position:
    -100px 100px,
    -100px 100px;
  transform: rotate3d(0.5, 1, 0, 30deg);
}

.content-box {
  align-self: end;
  height: 220px;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.5s ease-in-out;
  padding: 20px 30px 25px;
  transform-style: preserve-3d;
}
.content-box:hover {
  background: rgba(0, 0, 0, 0.7);
}
.content-box .card-title {
  display: inline-block;
  color: white;
  font-size: 1.5em;
  font-weight: 900;
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px, 50px);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  cursor: default;
}

.content-box .card-title:hover {
  transform: translate3d(0px, 0px, 60px);
}

.content-box .card-content {
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;
  font-family: 'NanumSquareRound';
  color: #f2f2f2;
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px, 30px);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  cursor: default;
}

.content-box .card-content:hover {
  transform: translate3d(0px, 0px, 60px);
}

.music-box {
  display: flex;
  gap: 20px;
  transform-style: preserve-3d;
}
.music-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  cursor: pointer;
  color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px, 20px);
}

.music-box .music-link:hover {
  transform: translate3d(0px, 0px, 60px);
  background-color: #fff;
  color: #000;
}

.date-box {
  position: absolute;
  top: 40px;
  right: 40px;
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 5px;
  gap: 10px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  transform: translate3d(0px, 0px, 80px);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;
}

.date-box img {
  width: 55%;
}

/* 작은 모바일 (300px 이하) */
@media (max-width: 320px) {
}

/* 모바일 (320px 이상) */
@media (min-width: 321px) {
  /* 스타일 정의 */
}

@media (max-width: 451px) {
  .music {
    width: 100%;
    height: 350px;
    perspective: 1000px;
  }
  .content-box .card-title {
    font-size: 1.3em;
  }
}
/* 작은 태블릿 (600px 이하) */
@media (max-width: 600px) {
  /* 스타일 정의 */
}

/* 중간 크기 태블릿 (768px 이하) */
@media (max-width: 768px) {
  /* 스타일 정의 */
}

/* 큰 태블릿 (1024px 이하) */
@media (max-width: 1024px) {
  .music-warp {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 50px 0;
  }
}
/* 큰 태블릿 (1024px 이하) */
@media (max-width: 1200px) {
}
</style>
