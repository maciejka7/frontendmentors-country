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
import {
  computed,
  defineComponent,
  onUpdated,
  PropType,
  ref,
  watch,
} from "vue";
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
  setup({}) {
    const store = useStore<State>();
    const borderedCountries = ref<BorderedCountries[]>([]);
    const countries = computed(() => store.getters.selectedCountry);
    const { push } = useRouter();

    const handleMapAplhaCodeToFullName = () => {
      const countiresFullNameList: string[] = [];
      const result: BorderedCountries[] = [];

      store.state.allCountires.forEach((country) => {
        countries.value.borders?.forEach((countryCode: string) => {
          if (country.alpha3Code === countryCode) {
            countiresFullNameList.push(country.name);
            result.push({
              alpha3Code: country.alpha3Code,
              name: country.name,
            });
          }
        });
      });
      borderedCountries.value = result;

      return countiresFullNameList;
    };

    watch(countries, () => handleMapAplhaCodeToFullName());

    const handleGetCountriesData = (countriesAlpha3Code: string) =>
      store.state.allCountires.filter(
        (country) => country.alpha3Code === countriesAlpha3Code
      );

    const handleSelectCountry = (country: Pick<Country, "alpha3Code" | "name">) => {
      const [countryData] = handleGetCountriesData(country.alpha3Code);

      store.dispatch("setSelectedCountry", countryData);
      push(`/country/${country.alpha3Code}`);
    };

    handleMapAplhaCodeToFullName();
    return {
      countries: computed(() => store.getters.selectedCountry),
      borderedCountries,
      handleSelectCountry,
    };
  },
});
</script>

<style scoped lang='scss'>
@import "./BorderedCountries.styles.scss";
</style>