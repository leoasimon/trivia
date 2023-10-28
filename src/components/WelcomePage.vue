<template>
  <div class="bg-white w-[90vw] p-4 mx-auto mt-4">
    <h1 class="text-purple text-4xl text-center">Welcome<br />to Trivia</h1>
    <div class="text-black mt-6">
      <p>
        This is a simple trivia game made possible thanks to the
        <a class="underline text-blue" href="https://opentdb.com/api_config.php" target="_blank"
          >Trivia Api</a
        >
      </p>
      <p class="mt-2">The rules are simple:</p>
      <ul class="list-disc ml-6">
        <li>Ten questions</li>
        <li>Ten seconds per question</li>
      </ul>
      <p class="mt-2">Good luck!</p>
    </div>
  </div>
  <button
    @click="$emit('startGame')"
    class="mx-auto mt-6 text-xl bg-purple text-white p-6 rounded-full shadow-xl shadow-blue-dark/50"
  >
    START THE GAME
  </button>
</template>

<script setup>
defineEmits(["startGame"])
</script>
