<template>
  <div class="country">
    <h3>country</h3>
    <p>there will be a country details</p>
    {{ JSON.stringify(country) }}
  </div>
</template>

<script>
import { defineComponent, computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Country",
  setup() {
    const { params } = useRoute();

    const store = useStore();

    const country = computed(() =>
      store.getters.countriesByCode(params.countryCode)
    );

    console.log(country);

    return {
      country,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./Country.styles.scss";
</style>