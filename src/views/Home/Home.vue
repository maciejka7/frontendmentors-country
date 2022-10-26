<template>
  <section class="top-bar">
    <Search />
    <Filters />
  </section>
  <CardList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CardList, Search, Filters } from "../../components";

export default defineComponent({
  name: "Home",
  components: { CardList, Search, Filters },
});
</script>

<style>
</style>