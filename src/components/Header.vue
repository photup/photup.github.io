<script setup>
import { ref } from 'vue'
import axios from 'axios'

/*
let headerlinks = ref(null)
let gettrue = 0
axios({
  method: 'get',
  url: '/data/data.json'
}).then(
  function get(response) {
    let headerlinks = ref(response.data.pages)
    console.log("infn:", headerlinks) //在这里能打印出来
    let getdata = 1
    console.log(getdata)
  });

console.log("outside:", headerlinks) //在这里打印不出来
*/

let headerlinks = ref([
  { "title": "文章", "link": "https://tripper.press/" },
  { "title": "摄影", "link": "https://tripper.press/gallery" },
  { "title": "视频", "link": "https://www.youtube.com/channel/UC-mihOvBA4s6d0UIEtD7xew" }
])
let getdata = 1
</script>
<template>
  <div class="itp-float-bar shadow-itp">
    <div class="left-item">
      <a class="itp-float-bar-item " href="/" title="Photup">
        Photup.
      </a>
    </div>
    <div class="center-item">
      <div v-if="getdata = 1" class="flex">
        <div v-for="(item, index) in headerlinks">
          <a class="itp-float-bar-item" :href="item.link" :title="item.title">
            {{ item.title }}
          </a>
        </div>
      </div>
      <div v-else>Oh no 😢</div>
    </div>
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
