<template>
  <div class="search">
    <SearchIcon class="search_icon" />
    <input
      class="search_field"
      type="text"
      name="search"
      id="search"
      placeholder="Search for a country..."
    />
  </div>
</template>


<script>
import { defineComponent } from "vue";
import SearchIcon from "../../assets/icons/search.svg";
export default defineComponent({
  components: { SearchIcon },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "./Search.styles.scss";
</style>