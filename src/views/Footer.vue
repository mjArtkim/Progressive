<template>
  <div class="footer">
    <div class="foot-txt">All licenses are held by</div>
    <div class="foot-ig">
      <FooterLink
        v-for="(artist, index) in licenseHolders"
        :key="index"
        :name="artist.name"
        :href="artist.href"
      />
    </div>

    <div class="foot-txt">Additionally, the photo rights belong to</div>
    <div class="foot-ig">
      <FooterLink
        v-for="(artist, index) in photoHolders"
        :key="index"
        :name="artist.name"
        :href="artist.href"
      />
    </div>
  </div>
</template>

<script setup>
import FooterLink from '@/components/FooterLink.vue'

const licenseHolders = [
  { name: 'DubVision', href: 'https://www.instagram.com/dubvisionmusic' },
  { name: 'LamineGuendouz', href: 'https://www.instagram.com/lamineguendouz' },
  { name: 'Matisse&Sadko', href: 'https://www.instagram.com/matissesadko' },
  { name: 'ThirdParty', href: 'https://www.instagram.com/thirdpartylive' },
  { name: 'SickIndividuals', href: 'https://www.instagram.com/sickindividuals' },
]

const photoHolders = [
  { name: 'AlfieBass', href: 'https://www.instagram.com/alfiebasss' },
  { name: 'ChrisChew', href: 'https://www.instagram.com/chrischew' },
  { name: 'DubVision', href: 'https://www.instagram.com/dubvisionmusic' },
  { name: 'Matisse&Sadko', href: 'https://www.instagram.com/matissesadko' },
  { name: 'ThirdParty', href: 'https://www.instagram.com/thirdpartylive' },
  { name: 'SickIndividuals', href: 'https://www.instagram.com/sickindividuals' },
]
</script>

<style>
.footer {
  font-family: 'NanumSquareRound';
  min-height: 20vh;
  color: #eee;
  padding: 0 80px;
}
.foot-ig {
  display: flex;
  gap: 10px;
}
.foot-txt {
  margin: 20px 0;
}
.button {
  color: #eee !important;
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
}
.button {
  --border-right: 3px;
  --text-stroke-color: rgba(255, 255, 255, 0.6);
  --animation-color: #3784ff;
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 14px;
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}
.hover-text {
  position: absolute;
  box-sizing: border-box;
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}

.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color));
}

/* 작은 태블릿 (600px 이하) */
@media (max-width: 600px) {
  .music-container {
    padding: 0 30px;
    min-height: 80vh;
    height: 100%;
  }
}

/* 중간 크기 태블릿 (768px 이하) */
@media (max-width: 768px) {
  /* 스타일 정의 */
}

/* 큰 태블릿 (1024px 이하) */
@media (max-width: 1024px) {
  .footer {
    padding: 20px 30px;
  }
  .foot-ig {
    display: grid;
    gap: 20px 5px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
