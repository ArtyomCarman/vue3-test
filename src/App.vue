<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>
<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  width: 100%;
  padding: 2rem;
  font-weight: normal;
}

body {
  display: flex;
}
</style>
