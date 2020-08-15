<template>
  <div class="someUsefulClass">
    <textarea
      name="inputMessage"
      rows="10"
      v-model="inputMessage"
      placeholder="Write the input Text"
      class="show-full-width"
    ></textarea>
    <button class @click="encode()">Encode</button>
    <button class @click="decode()">Decode</button>
    <textarea
      name="outputMessage"
      rows="10"
      v-model="outputMessage"
      placeholder="Here will be the Output"
      class="show-full-width"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store";
export default defineComponent({
  name: "EnDecodeMessage",
  setup() {
    const store = useStore();
    const encodeMessage = ref(true);
    const inputMessage = ref("");
    const outputMessage = ref("");

    const buttonText = computed(() => {
      return encodeMessage.value ? "Encode" : "Decode";
    });

    // watch(inputMessage, () => {
    //   console.log(inputMessage.value);
    // });

    function onButtonClicked() {
      const output = encodeMessage.value
        ? store.state.currentEncription.encript(inputMessage.value)
        : store.state.currentEncription.decript(inputMessage.value);
      console.log(output);
      outputMessage.value = output;
    }

    function encode() {
      const output = store.state.currentEncription.encript(inputMessage.value);
      console.log(output);
      outputMessage.value = output;
    }

    function decode() {
      const output = store.state.currentEncription.decript(inputMessage.value);
      console.log(output);
      outputMessage.value = output;
    }

    return {
      buttonText,
      onButtonClicked,
      inputMessage,
      outputMessage,
      encode,
      decode,
    };
  },
});
</script>

<style lang="less" scoped>
.show-full-width {
  display: block;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>