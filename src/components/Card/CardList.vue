<template>
  <div class="card-list-container">
    <ul v-if="allCountry">
      <li v-for="country in allCountry" :key="country.alpha3Code">
        <Card :info="country" />
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import Card from "./Card.vue";
import { useCountryApi } from "../../hooks/useCountryApi";
import { useStore } from "vuex";

export default defineComponent({
  name: "CardList",
  components: { Card },
  setup() {
    const store = useStore();
    useCountryApi();

    return {
      allCountry: computed(() => store.getters.countires),
    };
  },
});
</script>

<style scoped>
@import "./CardList.styles.scss";
</style>