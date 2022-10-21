<script>
import { attributes, VueComponent } from "./contents/test.md";
export default {
  name: "App",
  components: {
    ContentMarkdown: VueComponent,
  },
  data() {
    return {
      attributes,
    };
  },
};
// Markdown converter learn form https://github.com/hmsk/vite-plugin-markdown/tree/main/examples/vue/src
</script>
<template>
  <div class="content-area">
    <div class="p-6">
      <article>
        <content-markdown />
        <markdown-content />
      </article>
    </div>
  </div>
</template>

<style>
.content-area {
  background-color: #ffffff;
  overflow: scroll;
}
</style>
