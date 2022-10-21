<script>
import { attributes, VueComponent } from "./contents/introduce.md";
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
</script>
<template>
  <div class="content-area w-[100vw] md:w-[50vw] md:h-[100vh]">
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
