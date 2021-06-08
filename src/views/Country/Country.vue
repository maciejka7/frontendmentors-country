<template>
  <div class="country">
    <back-button />
    <h3>country</h3>
    <p>there will be a country details</p>
    {{ JSON.stringify(country) }}
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import BackButton from "../../components/Buttons/BackButton.vue";
import { useCountryApi } from "../../hooks/useCountryApi";
import { Country } from "../../types/country";

export default defineComponent({
  components: { BackButton },
  name: "Country",
  setup() {
    const { params } = useRoute();
    const store = useStore();

    useCountryApi(null, params.countryCode as string);

    return {
      country: computed(() => store.getters.selectedCountry),
    };

    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "./Country.styles.scss";
</style>