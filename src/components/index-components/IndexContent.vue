<script>
$(function () {
  $("div.lazy-bg").lazyload();
});
</script>
<template>
  <div class="content-area content-area-gallery p-6">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px]">
      <div class="gallery-item lazy-bg"
        data-src="https://imgur.lzmun.com/picgo/after2022/202204091210736.jpeg_bloggallery">
        <a class="gallery-entry" href="/gallery/liuzhou2022/"></a>
      </div>
      <div class="gallery-item lazy-bg"
        data-src="https://imgur.lzmun.com/picgo/after2022/202204091210736.jpeg_bloggallery">
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style>
.gallery-item {
  background-position: center;
  background-size: cover;
  aspect-ratio: 16 / 9;
  border-radius: 5px;
  transition: all .15s ease-in-out;
}

.gallery-item:hover {
  box-shadow: 0 2px 8px rgb(0 0 0 / 12%);
  transform: scale(1.02);
  transition: all .15s ease-in-out;
}

.gallery-entry {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  text-indent: -9999px;
  z-index: 0;
}

@media (min-width: 800px) {
  .content-area {
    max-width: 1500px;
    margin: 0 auto;
  }
}

@media (max-width: 800px) {
  .content-area {
    max-width: 92%;
    margin: 0 auto;
  }
}
</style>