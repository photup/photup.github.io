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
  <div class="title-area">
    <span class="font-[900] text-[80px]">{{ title }}</span>
    <span class="font-[900] text-[80px]">{{ titlespan }}</span>
    <p>
      Cherish every moment
    </p>
  </div>
</template>

<style scoped>
    .title-area {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 48px;
      backdrop-filter: blur(15px) brightness(120%);
    }
</style>
