<template>
  <section>
    <router-link to="/">
      <h1>Where in the world?</h1>
    </router-link>
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

<style scoped lang='scss'>
@import "./Header.styles.scss";
</style>