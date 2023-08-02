<script setup lang="ts">
// import Vue3Step from "./components/Step.vue";
const stepList = [
  { title: "验证手机号" },
  { title: "填写账号信息" },
  { title: "注册成功" },
]
const step = 1;
</script>

<template>
  <Vue3Step :step="step" :list="stepList"></Vue3Step>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
