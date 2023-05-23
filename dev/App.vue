<script setup lang="ts">
import { provide, reactive } from "vue";
import { load, apply } from "../src/profile";

const profile = reactive(load());

provide("profile", profile);
apply(profile);
</script>

<template>
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  />
  <profile-menu :profile="profile" />
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
