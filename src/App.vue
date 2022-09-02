<template>
  <div id="app">
    <!--  v-if="!show" -->
    <div>
      <!-- 2) listen to showRating comming from Form and call fucntion called showRating -->
      <Form @open="showThankYou" @showRating="showRating"></Form>
      <p class="text-white">The rating is: {{ this.rating }}</p>
    </div>
    <!-- <div v-if="show">
      <ThankYou> </ThankYou>
    </div> -->
  </div>
</template>

<script>
// Imports
import Form from './components/Form.vue';
import ThankYou from './components/ThankYou.vue';

export default {
  name: 'App',
  components: {
    Form,
    ThankYou,
  },
  data() {
    return {
      show: false,
      rating: '',
    };
  },
  methods: {
    showThankYou() {
      this.show = !this.show;
    },
    showRating(picked) {
      this.rating = picked;
      console.log('picked');
    },
  },
};
</script>

<style src="./assets/tailwind.css"></style>
