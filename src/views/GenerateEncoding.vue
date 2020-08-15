<template>
  <div>
    <h1>Encoding:</h1>
    <h2>CurrentEncoding: {{currentEncoding.name}}</h2>
    <table>
      <tr>
        <td v-for="(codeKey,key) in currentEncodingCode" :key="key">{{key}}</td>
      </tr>
      <tr>
        <td v-for="(codeKey,key) in currentEncodingCode" :key="key">{{codeKey}}</td>
      </tr>
    </table>

    <h2>Set Current Encoding to:</h2>
    <input
      type="button"
      v-for="encoding in allEncodings"
      :key="encoding.name"
      :value="encoding.name"
      v-on:click="changeCurrentEncoding(encoding)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore, MutationTypes } from "@/store";
import { Encription } from "@/models/code.data";

export default defineComponent({
  name: "GenerateEncoding",
  setup() {
    const store = useStore();

    const currentEncoding = computed(() => {
      return store.state.currentEncription;
    });

    const currentEncodingCode = computed(() => {
      return store.state.currentEncription.code;
      // Object.keys(
      // );
    });

    const allEncodings = store.state.allEncriptions;

    const changeCurrentEncoding = function (encription: Encription) {
      store.commit(MutationTypes.CHANGE_ENCRIPTION, encription);
    };

    return {
      currentEncoding,
      currentEncodingCode,
      allEncodings,
      changeCurrentEncoding,
    };
  },
});
</script>

<style lang="less">
</style>