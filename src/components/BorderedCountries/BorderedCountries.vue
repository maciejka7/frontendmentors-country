<template>
  <section class="borderedCountries-container">
    <p>
      <strong>Border Countries: </strong>
    </p>
    <ul>
      <li
        @click="() => handleSelectCountry(country)"
        v-for="country in borderedCountries"
        :key="country.alpha3Code"
      >
        {{ country.name }}
      </li>
    </ul>
  </section>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { State } from "../../store";
import { Country } from "../../types/country";

type BorderedCountries = {
  alpha3Code: string;
  name: string;
};

export default defineComponent({
  name: "BorderedCountries",
  props: {
    countries: {
      type: Array as PropType<string[]>,
    },
  },
  setup({ countries }) {
    const store = useStore<State>();
    const borderedCountries = ref<BorderedCountries[]>([]);
    const { push } = useRouter();

    const handleMapAplhaCodeToFullName = () => {
      const countiresFullNameList: string[] = [];

      store.state.allCountires.forEach((country) => {
        countries?.forEach((countryCode) => {
          if (country.alpha3Code === countryCode) {
            countiresFullNameList.push(country.name);
            borderedCountries.value.push({
              alpha3Code: country.alpha3Code,
              name: country.name,
            });
          }
        });
      });

      return countiresFullNameList;
    };

    const handleGetCountriesData = (countriesAlpha3Code: string) =>
      store.state.allCountires.filter(
        (country) => country.alpha3Code === countriesAlpha3Code
      );

    const handleSelectCountry = (country: Country) => {
      const [countryData] = handleGetCountriesData(country.alpha3Code);

      store.dispatch("setSelectedCountry", countryData);
      push(`/country/${country.alpha3Code}`);
    };

    handleMapAplhaCodeToFullName();
    return {
      borderedCountries,
      handleSelectCountry,
    };
  },
});
</script>

<style scoped lang='scss'>
@import "./BorderedCountries.styles.scss";
</style>