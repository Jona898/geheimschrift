<template>
  <div class="home">
    <h1>Welcome to the En-/Decoder for simple Messages</h1>
    <p>
      This is still work in Progress. To view the Source Code click here:
      <a :href="sourceCodeUrl" target="_blank" rel="noopener noreferrer">Source Code</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const sourceCodeUrl = "https://github.com/Jona898/geheimschrift/";

    return { sourceCodeUrl };
  },
});
</script>

<style lang="less" scoped>
</style>