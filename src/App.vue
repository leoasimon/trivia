<script setup>
import { ref } from 'vue';
import GameView from './components/GameView.vue';
import Layout from './components/Layout.vue';
import WelcomePage from './components/WelcomePage.vue';

const gameStatus = ref("NOT_STARTED");

const handleGameStart = () => {
  gameStatus.value = "ONGOING";
}

const handleGameOver = () => {
  alert("That was fun!");
  gameStatus.value = "NOT_STARTED";
}
</script>

<template>
  <Layout>
    <WelcomePage @start-game="handleGameStart" v-if="gameStatus === 'NOT_STARTED'"/>
    <GameView  v-if="gameStatus === 'ONGOING'" @on-game-over="handleGameOver"/>
  </Layout>
</template>