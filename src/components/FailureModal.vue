<template>
  <Modal type="error">
    <div class="py-6">
      <div class="w-32 m-auto flex flex-col">
        <img src="../assets/wrong.svg" class="w-32 h-32" />
        <span class="text-red text-xl text-center">Wrong!</span>
      </div>
      <div class="p-6">
        <p class="text-black">The correct answer is:</p>
        <div class="flex mt-2">
          <span class="font-bold text-purple">{{
            indexToLetter(correctAnswerIndex)
          }}</span>
          <span class="text-dark-grey"> - </span>
          <span class="text-dark-grey" v-html="correctAnswer" />
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import Modal from "./Modal.vue";

defineProps(["correctAnswer", "correctAnswerIndex"]);

const indexToLetter = (i) => "ABCDEFGH"[i];
</script>
