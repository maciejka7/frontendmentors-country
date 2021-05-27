<template>
  <section>
    <h1>Where in the world?</h1>
    <theme-switcher />
  </section>
</template>

<script>
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.vue";
export default {
  name: "Header",
  components: { ThemeSwitcher },
};
</script>

<style scoped>
@import "./Header.styles.scss";
</style>