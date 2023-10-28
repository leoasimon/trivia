<template>
  <div class="w-[90vw] mx-auto mt-4 p-4 bg-white shadow-md rounded-md">
    <div class="flex justify-end text-blue text-sm">
      <span>question {{ questionIndex + 1 }} / 10</span>
    </div>
    <p class="text-black mt-4">
      {{ question.question }}
    </p>
    <div class="mt-8">
      <div
        class="answer flex p-4 w-full items-center hover:bg-purple-extra-light hover:cursor-pointer"
        :class="{
          'border-purple border': selectedAnswer === answer,
        }"
        v-for="(answer, i) in answers"
        @click="selectAnswer(answer)"
      >
        <div class="flex-1">
          <span class="font-bold text-purple">{{ indexToLetter(i) }}</span>
          <span class="text-dark-grey"> - {{ answer }}</span>
        </div>
        <div>
          <div class="w-[18px] h-[18px] border-purple border rounded-full">
            <div
              class="check-center w-[12px] h-[12px] ml-[2px] mt-[2px] rounded-full"
              :class="{
                'bg-purple': selectedAnswer === answer,
              }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-6">
      <button
        class="bg-blue text-white px-6 py-3 rounded-md disabled:bg-blue-light hover:bg-blue-lighter"
        :disabled="selectedAnswer === null"
        @click="submitAnswer"
      >
        SUBMIT
      </button>
    </div>
  </div>
</template>

<style scoped>
.answer:hover .check-center {
  background-color: #febee8;
}
</style>

<script setup>
import { computed, ref } from "vue";

const props = defineProps(["question", "questionIndex"]);

const emit = defineEmits(["onQuestionAnswered"])

const selectedAnswer = ref(null);

const answers = computed(() =>
  shuffleArray([
    props.question.correct_answer,
    ...props.question.incorrect_answers,
  ])
);

const selectAnswer = (answer) => {
  selectedAnswer.value = answer;
};

const submitAnswer = () => {
    const isCorrect = selectedAnswer.value === props.question.correct_answer;
    alert(isCorrect ? "Nice one!" : "Wrong");
    emit("onQuestionAnswered", isCorrect);
    selectedAnswer.value = null;
}

const indexToLetter = (i) => "ABCDEFGH"[i];

const shuffleArray = (arr) => {
  let indexes = Array.from({ length: arr.length }, (_, i) => i);
  const shuffled = [];

  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(Math.random() * indexes.length);
    const randomIndex = indexes[index];
    shuffled.push(arr[randomIndex]);
    indexes.splice(index, 1);
  }
  return shuffled;
};
</script>
