<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Cover from "./components/index-components/Cover.vue";
import IndexContent from "./components/index-components/IndexContent.vue";
import Header from "./components/index-components/Header.vue";
import Gallery from "./Gallery.vue"
</script>

<template>
  <section class="cover-area md:grid h-screen w-screen">
    <div class="h-screen cover flex">
      <Cover title="Phot" titlespan="up." />
    </div>
    <!--<div class="md:max-h-screen overflow-y-scroll">
      <Content />
    </div>-->
  </section>
  <section class="index-area">
    <Header />
    <IndexContent />
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
