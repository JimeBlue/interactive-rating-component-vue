<template>
  <div id="app">
    <div v-if="!show">
      <Form @open="showThankYou"></Form>
    </div>
    <div v-if="show">
      <ThankYou> </ThankYou>
    </div>
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
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showThankYou() {
      this.show = !this.show;
    },
  },
};
</script>

<style src="./assets/tailwind.css"></style>
