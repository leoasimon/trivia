<script setup>
import { ref } from 'vue';
import GameView from './components/GameView.vue';
import Layout from './components/Layout.vue';
import WelcomePage from './components/WelcomePage.vue';
import GameOverView from './components/GameOverView.vue';

const gameStatus = ref("NOT_STARTED");
const finalScore = ref(0);

const handleGameStart = () => {
  finalScore.value = 0;
  gameStatus.value = "ONGOING";
}

const handleGameOver = ({ score }) => {
  gameStatus.value = "OVER";
  finalScore.value = score;
}
</script>

<template>
  <Layout>
    <WelcomePage @start-game="handleGameStart" v-if="gameStatus === 'NOT_STARTED'"/>
    <GameOverView v-if="gameStatus === 'OVER'" :score="finalScore" @restart-game="handleGameStart"/>
    <GameView  v-if="gameStatus === 'ONGOING'" @on-game-over="handleGameOver"/>
  </Layout>
</template>