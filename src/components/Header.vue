<script></script>
<template>
  <div class="itp-float-bar shadow-itp">
    <div class="left-item">
      <a class="itp-float-bar-item " href="/" title="Photup">
        Photup.
      </a>
    </div>
    <div class="center-item">
      <a class="itp-float-bar-item " href="/archives/" title="照片">
        照片
      </a>
      <a class="itp-float-bar-item " href="/gallery/" title="视频">
        视频
      </a>
    </div>
    <div class="itp-float-layer itp-toc-layer">
      <div class="clost-btn" style="display: flex">
        <a class="itp-float-layer-close-btn" id="close_btn">
          <div class="close_btn_red"></div>
        </a>
      </div>
    </div>
    <div class="itp-float-layer-bg layer-bg-nodisplay" id="close_layer"></div>
  </div>
</template>
<style>
root {
  --border-radius: 3px;
}

.itp-float-bar {
  z-index: 1000;
  width: 100vw;
  height: 80px;
  border-radius: 0;
  top: 0px;
  display: flex;
  flex-direction: row;
  position: sticky;
  background-color: #ffffff;
  align-items: center;
}

.itp-float-bar .itp-float-bar-item {
  background-color: transparent;
  color: #304A5E;
  font-size: 18px;
}

.left-item {
  align-items: center;
  vertical-align: middle;
  position: absolute;
}

.left-item a {
  padding: 0 24px;
}

.center-item {
  margin: 0 auto;
}

.center-item a {
  padding: 0 12px;
}

a.itp-float-bar-item {
  text-decoration: none;
}
</style>
