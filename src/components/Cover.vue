<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  titlespan: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="title-area md:m-[0] grid shadow-itp grid-cols-1 md:grid-cols-2 ">
    <div class="cover-1 w-[35vw] h-[300px]">
      <span class="font-[900] text-[48px] md:text-[60px]">{{ title }}</span>
      <span class="font-[900] text-[48px] md:text-[60px]">{{ titlespan }}<br /></span>
      <span>Cherish every moment</span>
    </div>
    <div class="cover-2 w-[auto] h-[300px] grid grid-cols-2 grid-rows-2">
      <div class="cover-items flex flex: 1 1 0%">
        <a class="cover-links" href="" title="article">
          文章
        </a>
      </div>
      <div class="cover-items flex flex: 1 1 0%">
        <a class="cover-links" href="" title="photo">
          照片
        </a>
      </div>
      <div class="cover-items flex flex: 1 1 0%">
        <a class="cover-links" href="" title="video">
          视频
        </a>
      </div>
      <div class="cover-items flex flex: 1 1 0%">
        <a class="cover-links" href="" title="code">
          实验室
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover-1 {
  padding: 24px 48px;
}

.cover-items {
  font-size: 18px;
  align-items: stretch;

  justify-content: center;
  align-items: center;

  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
}

.cover-items:hover {
  box-shadow: inset 1px 5px 18px .1px #676a6c84;
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.3s;
}

a.cover-links {
  line-height: 150px;
  text-decoration: none;
}

@media (min-width: 800px) {
  .title-area {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(20px);
    color: #304A5E;
    background-color: rgba(255, 255, 255, 0.6);
  }
}

@media (max-width: 800px) {
  .title-area {
    position: static;
    padding: 36px 0px 12px 48px;
  }
}
</style>
