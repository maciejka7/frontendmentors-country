<template>
  <div class="card-list-container">
    <ul v-if="allCountry.length">
      <li v-for="country in allCountry" :key="country.alpha3Code">
        <Card :info="country" />
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Card from "./Card.vue";
import { useCountryApi } from "../../hooks/useCountryApi";

export default defineComponent({
  name: "CardList",
  components: { Card },
  setup() {
    const { allCountry } = useCountryApi();

    return {
      allCountry,
    };
  },
});
</script>

<style scoped>
@import "./CardList.styles.scss";
</style>