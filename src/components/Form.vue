vbase
<template>
  <section>
    <div>
      <header class="">
        <div>
          <img src="../assets/images/icon-star.svg" alt="star" />
        </div>
        <h1 class="test">How did we do?</h1>
        <p class="text-red-600">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </header>
      <div>
        <form action="">
          <input type="radio" id="one" value="One" v-model="picked" />
          <input type="radio" id="two" value="Two" v-model="picked" />
          <input type="radio" id="three" value="Three" v-model="picked" />
          <input type="radio" id="four" value="Four" v-model="picked" />
          <input type="radio" id="five" value="Five" v-model="picked" />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    /* TODO: see if I can have an empty value as default for picked */
    return {
      picked: "one",
    };
  },
};
</script>
