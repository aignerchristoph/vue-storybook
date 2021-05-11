<template>
  <div id="app">
    <MultiPills :pillsData="pillsData" />
  </div>
</template>

<script>
import MultiPills from "./components/MultiPills";

export default {
  name: "App",
  components: {
    MultiPills,
  },
  data() {
    return {
      pillsData: [],
    };
  },
  created() {
    this.pillsData = [
      {
        label: "Ägypten",
        price: 342,
        url: "https://www.restplatzboerse.at/urlaub/aegypten-lid-143/",
      },
      {
        label: "Spanien",
        price: 342,
        url: "https://www.restplatzboerse.at/urlaub/aegypten-lid-143/",
      },
      {
        label: "Griechenland",
        price: 342,
        url: "https://www.restplatzboerse.at/urlaub/aegypten-lid-143/",
      },
      {
        label: "Alle Reiseziele",
        url: "https://www.restplatzboerse.at/urlaub/",
      },
    ];
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
