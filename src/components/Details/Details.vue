<template>
  <div class="details-container">
    <div class="details-image">
      <img :src="country.flag" :alt="`${country.name} flag`" />
    </div>

    <div class="details-data">
      <h2 class="details-data-header">{{ country.name }}</h2>
      <section>
        <div>
          <p><strong>Native Name: </strong> {{ country.nativeName }}</p>
          <p><strong>Population: </strong> {{ country.population }}</p>
          <p><strong>Region: </strong> {{ country.region }}</p>
          <p><strong>SubRegion: </strong> {{ country.subregion }}</p>
          <p><strong>Capital: </strong> {{ country.capital }}</p>
        </div>
        <div>
          <p>
            <strong>Top Level Domain: </strong>
            {{ factoryDisplayProperty(country.topLevelDomain) }}
          </p>
          <p>
            <strong>Currencies: </strong>
            {{ factoryDisplayProperty(country.currencies, "name") }}
          </p>
          <p>
            <strong>Languages: </strong>
            {{ factoryDisplayProperty(country.languages, "name") }}
          </p>
        </div>
      </section>
      <div class="details-neighbors">
        <BorderedCountries :countries="country.borders" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, onMounted, onUpdated, ref, watch } from "@vue/runtime-core";
import { Country } from "../../types/country";
import BorderedCountries from "../BorderedCountries/BorderedCountries.vue";
import { useStore } from "vuex";
import { State } from "../../store";
import { useRoute, useRouter } from "vue-router";
export default {
  components: { BorderedCountries },
  setup() {
    const store = useStore<State>();
    const { afterEach } = useRouter();
    const { params } = useRoute();

    afterEach(() => {
      console.log(
        window.location.hash.substring(window.location.hash.length - 3)
      );
    });

    const factoryDisplayProperty = (
      array: any[],
      propertyName?: keyof Country
    ) =>
      !propertyName
        ? array.join(", ")
        : array.map((item) => item[propertyName]).join(", ");

    return {
      factoryDisplayProperty,
      country: computed(() => store.getters.selectedCountry),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Details.styles.scss";
</style>