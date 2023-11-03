<template>
    <div v-if="loading">Loading the questions</div>
    <div v-else>
        <Question :question="currentQuestion" :question-index="questionIndex" @on-question-answered="handleQuestionAnswered"/>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

import Question from './Question.vue';

const emit = defineEmits(["onGameOver"]);

const loading = ref(true);
const questions = ref([]);
const questionIndex = ref(0);
const score = ref(0);
const openedModal = ref(null);

const currentQuestion = computed(() => questions.value[questionIndex.value]);

const N_QUESTIONS = 10;

const handleQuestionAnswered = (isCorrect) => {
    score.value += isCorrect ? 1 : 0;
    openedModal.value = isCorrect ? "SUCCESS" : "ERROR"
    if (questionIndex.value < N_QUESTIONS - 1) {
        questionIndex.value++;
    } else {
        emit("onGameOver", {
            score: score.value
        });
    }
}
onMounted(() => {
    fetch(`https://opentdb.com/api.php?amount=${N_QUESTIONS}`)
    .then(response => response.json())
    .then(data => {
        loading.value = false;
        questions.value = data.results;
    })
})
</script>