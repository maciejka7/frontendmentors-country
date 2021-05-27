<template>
  <div @click="handleOpenOptions" class="filters">
    <p>Filter by Region</p>
    <ChevronIcon :class="{ isOpen: isOpen }" />

    <div class="options" v-show="isOpen">
      <ul v-for="(region, index) in filtersRegionOptions" :key="index">
        <li
          @click="() => handleRegionFilterSelection(region)"
          class="options-item"
        >
          {{ region }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import ChevronIcon from "../../assets/icons/chevron-down.svg";
import { Filters } from "../../types/filters";

const filtersRegionOptions: Filters[] = [
  "World",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
];

export default defineComponent({
  name: "Filters",
  components: { ChevronIcon },
  setup() {
    const store = useStore();
    const isOpen = ref<boolean>(false);

    const handleOpenOptions = () => (isOpen.value = !isOpen.value);

    const handleRegionFilterSelection = (region: string) => {
      store.dispatch("changeSelectedFilter", region);
    };

    return {
      isOpen,
      handleOpenOptions,
      filtersRegionOptions,
      handleRegionFilterSelection,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./Filters.styles.scss";
</style>