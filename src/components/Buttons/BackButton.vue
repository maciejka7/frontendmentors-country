<template>
  <div @click="handleBack" class="back-button" role="button">
    <arrow-left />
    <p>Back</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ArrowLeft from "../../assets/icons/arrow-left.svg";

export default defineComponent({
  name: "BackButton",
  props: {
    handleBack: {
      type: Function as PropType<(event:MouseEvent)=> void>,
      required: true,
    },
  },
  components: { ArrowLeft },
  setup() {},
});
</script>

<style lang="scss" scoped>
.back-button {
  height: 40px;
  max-width: 140px;
  box-shadow: var(--main-shadow);
  margin-bottom: 45px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    margin-right: 10px;
  }
}
</style>