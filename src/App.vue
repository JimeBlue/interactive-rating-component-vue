<template>
  <div id="app">
    <!-- <Form></Form> -->
    <ThankYou></ThankYou>
  </div>
</template>

<script>
// Imports
import Form from "./components/Form.vue";
import ThankYou from "./components/ThankYou.vue";

export default {
  name: "App",
  components: {
    Form,
    ThankYou,
  },
};
</script>

<style src="./assets/tailwind.css"></style>
