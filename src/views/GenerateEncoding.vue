<template>
  <div>
    <h1>Encoding:</h1>
    <h2>CurrentEncoding: {{currentEncoding.name}}</h2>

    <div v-if="showCodeTable">
      <h3>Code:</h3>
      <table class="center-horizontal">
        <tr>
          <td v-for="(codeKey,key) in currentEncodingCode" :key="key">{{key}}</td>
        </tr>
        <tr>
          <td v-for="(codeKey,key) in currentEncodingCode" :key="key">{{codeKey}}</td>
        </tr>
      </table>
    </div>

    <h2>Set Current Encoding to:</h2>
    <div>
      <div v-for="encoding in allEncodings" :key="encoding.name">
        <input
          type="radio"
          name="encoding"
          :id="encoding.name"
          :value="encoding"
          v-model="currentEncoding"
        />
        <label :for="encoding.name">{{encoding.name}}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore, MutationTypes } from "../store";
import { Encription } from "../models/code.data";

export default defineComponent({
  name: "GenerateEncoding",
  setup() {
    const store = useStore();

    const currentEncoding = computed<Encription>({
      get() {
        return store.state.currentEncription;
      },
      set(encription) {
        store.commit(MutationTypes.CHANGE_ENCRIPTION, encription);
      },
    });

    const currentEncodingCode = computed(() => {
      return store.state.currentEncription.code;
    });

    const allEncodings = store.state.allEncriptions;

    function changeCurrentEncoding(encription: Encription) {
      store.commit(MutationTypes.CHANGE_ENCRIPTION, encription);
    }

    const showCodeTable = computed(() => {
      return Object.keys(currentEncodingCode.value).length > 0;
    });

    return {
      currentEncoding,
      currentEncodingCode,
      allEncodings,
      changeCurrentEncoding,
      showCodeTable,
    };
  },
});
</script>

<style lang="less" scoped>
.center-horizontal {
  margin-left: auto;
  margin-right: auto;
}
</style>