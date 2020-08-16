<template>
  <div class="modal-overlay" v-if="showModal" @click="closeDialog()"></div>
  <div class="modal" v-if="showModal">
    <GenerateEncoding></GenerateEncoding>
    <button class="button" @click="closeDialog()">Close Modal</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GenerateEncoding from "../views/GenerateEncoding.vue";
export default defineComponent({
  components: {
    GenerateEncoding,
  },
  props: {
    showModal: { type: Boolean, required: true },
  },
  emits: {
    "update:showModal"() {
      return true;
    },
  },
  setup(props, context) {
    function closeDialog() {
      context.emit("update:showModal", !props.showModal);
    }

    return { closeDialog };
  },
});
</script>

<style lang="less" scoped>
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;
}
</style>