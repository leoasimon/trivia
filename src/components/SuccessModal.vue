<template>
  <Modal type="success">
    <div class="py-20 relative">
      <div class="w-32 m-auto flex flex-col">
        <img src="../assets/party.svg" class="w-32 h-32" />
        <span class="text-green text-xl text-center">Nice one!</span>
      </div>
      <span
        @click="$emit('nextQuestion')"
        class="absolute bottom-0 right-0 text-blue underline cursor-pointer"
        >Next question</span
      >
    </div>
  </Modal>
</template>

<script setup>
import Modal from "./Modal.vue";

defineEmits(["nextQuestion"]);
</script>
