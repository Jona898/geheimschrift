<template>
  <div class="someUsefulClass">
    <div class="form-field">
      <textarea
        name="inputMessage"
        cols="50"
        rows="10"
        v-model="inputMessage"
        placeholder="Write the input Text"
        class="show-full-width"
      ></textarea>
    </div>

    <div class="form-field">
      CurrentEncoding: {{currentEncoding.name}}
      <br />
      <button @click="showChangeEncodingModal=true">Change Current Encoding</button>
      <GenerateEncodingPopup v-model:showModal="showChangeEncodingModal"></GenerateEncodingPopup>
    </div>

    <div class="form-field">
      <div>
        <div v-for="(direction,directionKey) in EncodingDirection" :key="directionKey">
          <input
            type="radio"
            name="Direction"
            :id="directionKey"
            :value="direction"
            v-model="currentDirection"
          />
          <label :for="directionKey">{{direction}}</label>
        </div>
      </div>
    </div>

    <div class="form-field">
      <button class @click="onButtonClicked()">{{currentDirection}}</button>
    </div>

    <div class="form-field">
      <textarea
        name="outputMessage"
        cols="50"
        rows="10"
        v-model="outputMessage"
        placeholder="Here will be the Output"
        class="show-full-width"
        readonly
      ></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore, MutationTypes } from "../store";
import { EncodingDirection } from "../models/EncodingDirection.data";
import GenerateEncodingPopup from "../components/GenerateEncodingPopup.vue";

export default defineComponent({
  name: "EnDecodeMessage",
  components: {
    GenerateEncodingPopup,
  },
  setup() {
    const store = useStore();

    const outputMessage = ref("");
    const showChangeEncodingModal = ref(false);

    const currentDirection = computed<EncodingDirection>({
      get() {
        return store.state.currentDirection;
      },
      set(value) {
        store.commit(MutationTypes.CHANGE_CURRENT_DIRECTION, value);
      },
    });

    const inputMessage = computed<string>({
      get() {
        return store.state.inputMessage;
      },
      set(value) {
        store.commit(MutationTypes.CHANGE_INPUT_MESSAGE, value);
      },
    });

    const currentEncoding = computed(() => store.state.currentEncription);

    function onButtonClicked() {
      const output = store.getters.outputMessage;
      console.log("onButtonClicked OutputMessage:", output);
      outputMessage.value = output;
    }

    return {
      onButtonClicked,
      inputMessage,
      outputMessage,
      EncodingDirection,
      currentDirection,
      showChangeEncodingModal,
      currentEncoding,
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

.form-field {
  padding: 5px;
}
</style>