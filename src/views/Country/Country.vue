<template>
  <div class="country">
    <back-button />
    <template v-if="country">
      <Details :country="country" />
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import BackButton from "../../components/Buttons/BackButton.vue";
import Details from "../../components/Details/Details.vue";
import { useCountryApi } from "../../hooks/useCountryApi";

export default defineComponent({
  components: { BackButton, Details },
  name: "Country",
  setup() {
    const { params } = useRoute();
    const store = useStore();

    useCountryApi(null, params.countryCode as string);

    return {
      country: computed(() => store.getters.selectedCountry),
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./Country.styles.scss";
</style>