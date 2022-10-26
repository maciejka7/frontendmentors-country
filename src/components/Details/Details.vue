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
import { computed, onUpdated, PropType } from "vue";
import { Country } from "../../types/country";
import BorderedCountries from "../BorderedCountries/BorderedCountries.vue";
export default {
  components: { BorderedCountries },
  props: {
    country: {
      type: Object as PropType<Country>,
      required: true,
    },
  },
  setup() {
    const factoryDisplayProperty = (
      array: any[],
      propertyName?: keyof Country
    ) => {
      if (array && array?.length > 0) {
        return !propertyName
          ? array.join(", ")
          : array.map((item) => item[propertyName]).join(", ");
      }
    };

    return {
      factoryDisplayProperty,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Details.styles.scss";
</style>