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

const currentQuestion = computed(() => questions.value[questionIndex.value]);

const handleQuestionAnswered = (isCorrect) => {
    if (questionIndex.value < 9) {
        questionIndex.value++;
    } else {
        emit("onGameOver");
    }
}
onMounted(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(data => {
        loading.value = false;
        questions.value = data.results;
    })
})
</script>