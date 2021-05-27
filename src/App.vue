<template>
  <Header />
  <section class="top-bar">
    <Search />
    <Filters />
  </section>
  <CardList />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { CardList, Header, Search, Filters } from "./components";

export default defineComponent({
  name: "App",
  components: { CardList, Header, Search, Filters },
});
</script>

<style lang="scss">
@import "./styles/globals.scss";
@import "./styles/app.scss";
</style>
