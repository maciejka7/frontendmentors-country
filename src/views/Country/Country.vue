<template>
  <div class="country">
    <back-button :handleBack="handleBack" />
    <template v-if="country">
      <Details :country="country" />
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import BackButton from "../../components/Buttons/BackButton.vue";
import Details from "../../components/Details/Details.vue";
import { useCountryApi } from "../../hooks/useCountryApi";
import { Country } from "../../types/country";

export default defineComponent({
  components: { BackButton, Details },
  name: "Country",
  setup() {
    const { params } = useRoute();
    const router = useRouter();
    const store = useStore();
    const country = computed(() => store.getters.selectedCountry);

    useCountryApi(params.countryCode as string);

    const handleBack = (event: MouseEvent) => {
      if (params?.countryCode) {
        const country: Country = store.getters.countriesByCode(
          params?.countryCode
        );
        store.commit("SET_SELECTED_COUNTRY", country);
      }
      router.back();
    };

    return {
      handleBack,
      country,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./Country.styles.scss";
</style>