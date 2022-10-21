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
  <div class="title-area md:m-[0]">
    <span class="font-[900] text-[48px] md:text-[80px]">{{ title }}</span>
    <span class="font-[900] text-[48px] md:text-[80px]">{{ titlespan }}</span>
    <p>Cherish every moment</p>
  </div>
</template>

<style scoped>
@media (min-width: 800px) {
  .title-area {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 48px;
    backdrop-filter: blur(15px) brightness(120%);
  }
}
@media (max-width: 800px) {
  .title-area {
    position: static;
    padding: 36px 0px 12px 48px;
  }
}
</style>
