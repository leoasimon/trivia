<template>
  <SuccessModal :is-open="isCorrect === true" />
  <FailureModal
    :isOpen="isCorrect === false"
    :correct-answer="question.correct_answer"
    :msg="selectedAnswer === null ? 'Timeout!' : 'Wrong!'"
    :correct-answer-index="answers.indexOf(question.correct_answer)"
  />
  <div class="w-[90vw] mx-auto mt-4 p-4 bg-white shadow-md rounded-md relative">
    <div class="flex justify-end text-blue text-sm">
      <span>question {{ questionIndex + 1 }} / 10</span>
    </div>
    <p class="text-black mt-4" v-html="question.question" />
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
          <span class="text-dark-grey"> - </span>
          <span class="text-dark-grey" v-html="answer" />
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
    <div
      class="absolute h-2 rounded-b-md bg-purple bottom-0 left-0"
      :class="{
        'w-full': timerStatus === 'READY',
        'w-0 transition-width duration-[10000ms] ease-linear rounded-br-none':
          timerStatus === 'ONGOING',
      }"
    />
  </div>
</template>

<style scoped>
.answer:hover .check-center {
  background-color: #febee8;
}
</style>

<script setup>
import { computed, onMounted, ref, watch } from "vue";

import { shuffleArray } from "../utils/arrayUtils";
import SuccessModal from "./SuccessModal.vue";
import FailureModal from "./FailureModal.vue";

const props = defineProps(["question", "questionIndex"]);

const emit = defineEmits(["onQuestionAnswered"]);

const selectedAnswer = ref(null);
const isCorrect = ref(null);
const timerStatus = ref("PAUSED");
const tid = ref(null);

const answers = computed(() =>
  shuffleArray([
    props.question.correct_answer,
    ...props.question.incorrect_answers,
  ])
);

watch(
  () => props.question,
  (v) => {
    onNewQuestion();
  }
);

onMounted(() => {
  onNewQuestion();
});

const onNewQuestion = () => {
  timerStatus.value = "READY";
  setTimeout(() => {
    startTimer();
  }, 500);
};

const startTimer = () => {
  timerStatus.value = "ONGOING";
  tid.value = setTimeout(() => {
    submitAnswer();
  }, 10000);
};

const selectAnswer = (answer) => {
  selectedAnswer.value = answer;
};

const submitAnswer = () => {
  isCorrect.value = selectedAnswer.value === props.question.correct_answer;
  timerStatus.value = "PAUSED";
  if (tid.value) {
    clearTimeout(tid.value);
  }
  setTimeout(() => {
    emit("onQuestionAnswered", isCorrect.value);
    selectedAnswer.value = null;
    isCorrect.value = null;
  }, 3000);
};

const indexToLetter = (i) => "ABCDEFGH"[i];
</script>
