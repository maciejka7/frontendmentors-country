<template>
  <div @click="handleOpenOptions" class="filters">
    <p>
      {{
        selectedRegion !== "World"
          ? `Selected: ${selectedRegion}`
          : "Filter by Region"
      }}
    </p>
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
import { defineComponent, onUnmounted, ref } from "vue";
import { useStore } from "vuex";
import ChevronIcon from "../../assets/icons/chevron-down.svg";
import { Filters } from "../../types/filters";

const filtersRegionOptions: Filters[] = [
  "World",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Polar",
];

export default defineComponent({
  name: "Filters",
  components: { ChevronIcon },
  setup() {
    const store = useStore();
    const isOpen = ref<boolean>(false);
    const selectedRegion = ref<Filters>("World");

    const handleCloseFiltersByKeyboard = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        isOpen.value = false;
      }
    };

    const handleOpenOptions = () => (isOpen.value = !isOpen.value);

    const handleRegionFilterSelection = (region: Filters) => {
      selectedRegion.value = region;
      store.dispatch("changeSelectedFilter", region);
    };

    document.addEventListener("keyup", handleCloseFiltersByKeyboard);

    onUnmounted(() => {
      document.removeEventListener("keyup", handleCloseFiltersByKeyboard);
    });

    return {
      isOpen,
      selectedRegion,
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