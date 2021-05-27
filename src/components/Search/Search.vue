<template>
  <div class="search">
    <SearchIcon class="search_icon" />
    <label for="search" v-show="false">Search</label>
    <input
      autofocus
      class="search_field"
      type="text"
      name="search"
      id="search"
      placeholder="Search for a country..."
      v-model="searchField"
    />
  </div>
</template>


<script>
import { defineComponent, ref, watch } from "vue";
import SearchIcon from "../../assets/icons/search.svg";
import debounce from "lodash/debounce";
import { useStore } from "vuex";
export default defineComponent({
  components: { SearchIcon },
  setup() {
    const searchField = ref("");
    const store = useStore();

    const handleSearch = debounce(() => {
      store.dispatch("searchForCountries", searchField.value);
      store.dispatch("setSearchQuery", searchField.value);
    }, 500);

    watch(searchField, handleSearch);

    return { handleSearch, searchField };
  },
});
</script>

<style lang="scss" scoped>
@import "./Search.styles.scss";
</style>