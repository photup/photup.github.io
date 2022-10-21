<script setup>
import Header from "./components/Header.vue";
import Content from "./components/IndexContent.vue";
</script>

<template>
  <section class="index-area md:grid md:grid-cols-2 h-screen">
    <div class="md:max-h-screen">
      <Header title="Phot" titlespan="up." />
    </div>
    <div class="md:max-h-screen overflow-y-scroll">
      <Content />
    </div>
  </section>
</template>

<style scoped>
section.index-area {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(217deg, #6cebde55, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, #71afdd, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, #7199f5, rgba(0, 0, 255, 0) 70.71%);
  background-position: center;
  background-size: cover;
}
</style>
