<template>
  <Header />

  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Header } from "./components";

export default defineComponent({
  name: "App",
  components: { Header },
});
</script>

<style lang="scss">
@import "./styles/globals.scss";
@import "./styles/app.scss";
</style>
