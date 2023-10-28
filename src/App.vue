<script setup>
import Layout from './components/Layout.vue';
import WelcomePage from './components/WelcomePage.vue';

const handleGameStart = () => {
  alert("TODO: make the game");
}
</script>

<template>
  <Layout>
    <WelcomePage @start-game="handleGameStart"/>
  </Layout>
</template>