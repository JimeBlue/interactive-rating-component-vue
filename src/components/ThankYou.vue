<template>
  <section
    class="bg-[#252D37] py-7 w-11/12 m-auto chico:w-10/12 medio:w-10/12 sm:max-w-max md:max-w-xl rounded-3xl font-overpass"
  >
    <div class="m-auto w-11/12">
      <!-- card header -->
      <!-- Center img and badge by using flex in parent-->
      <header class="flex flex-col items-center">
        <div>
          <img
            src="../assets/images/illustration-thank-you.svg"
            alt="thank you"
          />
        </div>
        <!-- 6) Output rating -->
        <span
          class="py-2 px-3 my-7 bg-[#2D3743] text-[#fb7413] rounded-3xl whitespace-nowrap inline-block"
          >You selected {{ rating }} out of 5</span
        >
      </header>
      <!-- card body -->
      <div class="text-center text-white">
        <h1 class="text-3xl mb-4">Thank You!</h1>
        <p class="text-[#959EAC] mb-4">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // 5) accept rating from App
  props: ['rating'],
  data() {
    return {};
  },
};
</script>
