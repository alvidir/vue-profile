<script setup lang="ts">
import { remove, loadAndApply } from "../src/profile";

remove();
const profile = loadAndApply();
</script>

<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <profile-menu :profile="profile" signupUrl="#?x=0" archiveUrl="#?x=1" />
</template>

<style lang="scss">
@import "fibonacci-styles";

* {
  margin: 0;
  padding: 0;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: row;
  width: 100%;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-bg-secondary);
}
</style>
