<template>
  <div class="pillContainer">
    <div :key="pill.price" v-for="pill in pillsData">
      <Pill :pill="pill" />
    </div>
  </div>
</template>

<script>
import Pill from "./Pill";

export default {
  name: "Multipills",
  props: {
    pillsData: Array,
  },
  components: {
    Pill,
  },
};
</script>

<style>
.pillContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
