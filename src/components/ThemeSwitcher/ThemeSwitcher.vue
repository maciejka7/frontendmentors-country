<template>
  <div>
    <MoonIcon :class="{ filled: toggledDarkMode }" />
    <p @click="handleChangeTheme">
      {{ !toggledDarkMode ? "Dark" : "Light" }} Mode
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { changeTheme, darkModeValue } from "../../utils/themeSwitcher";
import MoonIcon from "../../assets/icons/moon.svg";

export default defineComponent({
  name: "ThemeSwitcher",
  components: { MoonIcon },
  setup() {
    const toggledDarkMode = ref(true);

    onMounted(() => {
      darkModeValue === "true"
        ? (toggledDarkMode.value = true)
        : (toggledDarkMode.value = false);
    });

    const handleChangeTheme = () => {
      toggledDarkMode.value = !toggledDarkMode.value;
      changeTheme();
    };
    return { handleChangeTheme, toggledDarkMode };
  },
});
</script>

<style scoped>
@import "./ThemeSwitcher.styles.scss";
</style>