<script setup>
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
    linear-gradient(45deg, #a6bce8, #ffc0c0 70.71%),
    linear-gradient(225deg, #343434, #77cbb1 70.71%);
  /*background-image: url('https://imgur.lzmun.com/picgo/20200228233457.jpg_/fw/1280');*/
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
