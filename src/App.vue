<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cover from "./components/Cover.vue";
import Content from "./components/IndexContent.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <section class="index-area md:grid h-screen w-screen">
    <div class="h-screen cover flex">
      <Cover title="Phot" titlespan="up." />
    </div>
    <!--<div class="md:max-h-screen overflow-y-scroll">
      <Content />
    </div>-->
  </section>
  <section class="sec-area">
    <Header />
    <Content />
  </section>
</template>

<style scoped>
div.cover {
  background:
    radial-gradient(circle at 10% 10%,
      #90caaf80 10%,
      #ffffff00 100%),
    radial-gradient(circle at 90% 90%,
      #71afdd80 10%,
      #ffffff00 100%);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
