<template>
  <div class="card">
    <img :src="info.flag" alt="" />
    <section class="card-content">
      <h3>{{ info.name }}</h3>
      <p>
        <strong>Population</strong>:
        {{ info.population.toLocaleString() }}
      </p>
      <p><strong>Region</strong>: {{ info.region }}</p>
      <p><strong>Capital</strong>: {{ info.capital }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Country } from "../../types/country";

export default defineComponent({
  name: "Card",
  props: {
    info: {
      type: Object as PropType<Country>,
      required: true,
    },
  },
  setup(props) {},
});
</script>

<style scoped>
@import "./Card.styles.scss";
</style>