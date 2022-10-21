<script setup>
import Cover from "./components/Cover.vue";
import Content from "./components/IndexContent.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <section class="index-area md:grid h-screen w-screen">
    <div class="md:max-h-screen cover">
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
  /*background: linear-gradient(217deg, #6cebde55, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #71afdd, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #7199f5, rgba(0, 0, 255, 0) 70.71%);*/
    background-image: url('https://imgur.lzmun.com/picgo/20200228233457.jpg_/fw/1280');
  background-position: center;
  background-size: cover;
}
</style>
