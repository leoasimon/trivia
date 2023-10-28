<template>
    <div v-if="loading">Loading the questions</div>
    <div v-else>
        {{ JSON.stringify(questions) }}
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const loading = ref(true);
const questions = ref([]);

onMounted(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(data => {
        loading.value = false;
        questions.value = data.results;
    })
})
</script>