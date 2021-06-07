<template>
  <div class="card-list-container">
    <div v-if="isLoading">Loading...</div>

    <div v-else>
      <transition-group name="list" tag="ul" v-if="allCountry.length > 0">
        <li v-for="country in allCountry" :key="country.alpha3Code">
          <router-link :to="`/country/${country.alpha3Code}`">
            <Card :info="country" />
          </router-link>
        </li>
      </transition-group>

      <div v-else>no matches 😶</div>
    </div>
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
      isLoading: computed(() => store.getters.isLoading),
    };
  },
});
</script>

<style scoped lang="scss">
@import "./CardList.styles.scss";
</style>