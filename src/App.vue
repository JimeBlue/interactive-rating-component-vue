<template>
  <div id="app">
    <div v-if="!show">
      <!-- 2) listen to showRating comming from Form and call fucntion called showRating -->
      <Form @open="showThankYou" @showRating="showRating"></Form>
    </div>
    <div v-if="show">
      <!-- 4) Pass rating to ThankYou -->
      <ThankYou :rating="rating"> </ThankYou>
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
      rating: "",
    };
  },

  methods: {
    showThankYou() {
      this.show = !this.show;
    },
    // 3) set rating property defines here to property picked comming from Form
    showRating(picked) {
      this.rating = picked;
      console.log("picked");
    },
  },
};
</script>

<style src="./assets/tailwind.css"></style>
