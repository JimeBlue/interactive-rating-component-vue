vbase
<template>
  <section class="bg-[#252D37] p-5">
    <div>
      <header>
        <span
          class="bg-[#2D3743] w-14 h-14 rounded-full inline-flex justify-center items-center"
        >
          <img
            src="../assets/images/icon-star.svg"
            alt="star"
            class="w-11 h-11"
          />
        </span>
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
