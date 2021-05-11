<template>
  <a class="pill" v-bind:href="pill.url"
    >{{ pill.label }}
    <span v-if="pill.price" class="price">ab € {{ pill.price }}</span></a
  >
</template>

<script>
export default {
  name: "Pill",
  props: {
    pill: Object,
  },
};
</script>

<style>
.pill {
  background-color: #fff;
  display: inline-block;
  color: #2ccbdf;
  padding: 0rem 1rem;
  text-decoration: none;
  font-size: 3.5rem;
  font-weight: 700;
  border: 1px solid #2ccbdf;
  border-radius: 3rem;
  transition: all 0.4s ease;
  margin: 1rem;
}

.price {
  color: #a11a79;
  font-size: 2.5rem;
  font-weight: 400;
}

.pill:hover {
  color: #1daaba;
  border-color: #1daaba;
  transform: translate(0);
  box-shadow: 0 0.5rem 1rem -0.2em;
  transform: translateY(-0.1rem);
}
</style>
