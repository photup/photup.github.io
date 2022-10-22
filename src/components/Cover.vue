<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titlespan: {
    type: String,
    required: true,
  },
});
const CoverLinks = ref([
  { title: '文章', link: 'https://tripper.press/' },
  { title: '摄影', link: 'https://tripper.press/gallery' },
  { title: '视频', link: 'https://www.youtube.com/channel/UC-mihOvBA4s6d0UIEtD7xew' },
  { title: '实验室', link: '/codelab' },
])

</script>
<template>
  <div class="cover-area md:m-[0] grid shadow-itp grid-cols-1 md:grid-cols-2 ">
    <div class="cover-1 w-[auto] md:min-w-[300px] md:h-[300px] flex">
      <div class="font-[900] text-[28px] md:text-[48px]">{{ title }}{{ titlespan }}
      </div>
      <span>Cherish every moment</span>
    </div>
    <div class="cover-2 w-[auto] md:min-w-[300px] md:h-[300px] grid grid-cols-2 grid-rows-2">
      <div v-for="(item, index) in CoverLinks">
        <div class="cover-items flex flex: 1 1 0%">
          <a class="cover-links" :href="item.link" title="article">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover-1 {
  padding: 24px 24px 12px 48px;
  flex-direction: column;
  justify-content: center;
}

.cover-items {
  font-size: 18px;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
}

.cover-items:hover {
  box-shadow: inset 1px 1px 9px .1px #81858884;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
}

.cover-area {
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.6);
}

@media (min-width: 800px) {
  .cover-area {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #304A5E;
    min-width: 600px
  }

  .cover-1 {
    padding-bottom: 48px;
  }

  a.cover-links {
    line-height: 150px;
    text-decoration: none;
  }
}

@media (max-width: 800px) {
  .title-area {
    position: static;
    padding: 36px 0px 12px 48px;
  }

  a.cover-links {
    line-height: 96px;
    text-decoration: none;
  }
}
</style>
