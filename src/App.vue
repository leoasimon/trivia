<script setup>
import { ref } from 'vue';
import GameView from './components/GameView.vue';
import Layout from './components/Layout.vue';
import WelcomePage from './components/WelcomePage.vue';

const gameStatus = ref("NOT_STARTED");

const handleGameStart = () => {
  gameStatus.value = "ONGOING";
}
</script>

<template>
  <Layout>
    <WelcomePage @start-game="handleGameStart" v-if="gameStatus === 'NOT_STARTED'"/>
    <GameView  v-if="gameStatus === 'ONGOING'" />
  </Layout>
</template>