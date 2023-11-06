<template>
  <div
    class="z-10 absolute bg-purple-extra-dark/40 w-screen r-0 t-0"
    :class="{
      'border border-red': type === 'error',
      'border border-green': type === 'success',
    }"
    v-show="isOpen"
  >
    <div class="justify-center w-full h-screen">
      <div
        class="w-[480px] p-4 max-w-[90vw] bg-almost-white m-auto mt-[20vh] rounded-xl"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';

const props = defineProps(["type", "isOpen"]);

const emit = defineEmits("onClose");
</script>
