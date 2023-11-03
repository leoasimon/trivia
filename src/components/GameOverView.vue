<template>
  <div class="bg-white w-[90vw] p-4 mx-auto mt-4">
    <div>
        <span class="text-dark-grey">Final score:</span>
    </div>
    <div class="flex flex-col align-center">
        <span class="mx-auto text-[82px]" :class="{
            'text-red': score <= 2,
            'text-orange': score > 2 && score <= 5,
            'text-yellow': score > 5 && score <= 7,
            'text-green': score >= 8
        }">{{ score }} / 10</span>
        <span class="mx-auto text-dark-grey text-2xl">{{ getScoreMsg(score) }}</span>
    </div>
  </div>
  <button
    @click="$emit('restartGame')"
    class="mx-auto mt-6 text-xl bg-purple text-white p-6 rounded-full shadow-xl shadow-blue-dark/50"
  >
    PLAY AGAIN
  </button>
</template>

<script setup>
defineProps(["score"]);

defineEmits(["restartGame"]);

const getScoreMsg = (score) => {
    if (score <= 2) {
        return "Not so great"
    }
    if (score <= 5) {
        return "You can do better!"
    }
    if (score <= 7) {
        return "Not bad!"
    }
    return "Congrats!"
}
</script>
