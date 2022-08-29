vbase
<template>
  <!-- "border-2 border-green-500 -->
  <section class="bg-[#252D37] py-7 w-10/12 m-auto rounded-3xl font-overpass">
    <div class="m-auto w-11/12">
      <header>
        <span
          class="bg-[#2D3743] w-10 h-10 rounded-full inline-flex justify-center items-center"
        >
          <img
            src="../assets/images/icon-star.svg"
            alt="star"
            class="w-4 h-4"
          />
        </span>
        <h1 class="test text-xl text-white font-bold my-4 tracking-wider">
          How did we do?
        </h1>
        <p class="text-light-gray text-base">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </header>
      <div class="w-full">
        <form action="">
          <ul class="list-none flex my-6 justify-between">
            <li>
              <input
                type="radio"
                value="One"
                name="rating"
                id="1"
                v-model="picked"
                class="hover:bg-[#fb7413] hidden"
              />
              <!-- /* Style the label to give it the appearance of a button */ -->
              <label
                for="1"
                class="bg-[#2D3743] text-light-gray hover:text-white cursor-pointer py-2 px-4 text-base rounded-full inline-block m-1 hover:bg-[#fb7413]"
                >1</label
              >
            </li>
            <li>
              <input
                type="radio"
                value="Two"
                name="rating"
                id="2"
                v-model="picked"
                class="hover:bg-[#fb7413] hidden"
              />
              <label
                for="2"
                class="bg-[#2D3743] text-light-gray hover:text-white cursor-pointer py-2 px-4 text-base rounded-full inline-block m-1 hover:bg-[#fb7413]"
                >2</label
              >
            </li>
            <li>
              <input
                type="radio"
                value="Three"
                name="rating"
                id="3"
                v-model="picked"
                class="hover:bg-[#fb7413] hidden"
              />
              <label
                for="3"
                class="bg-[#2D3743] text-light-gray hover:text-white cursor-pointer py-2 px-4 text-base rounded-full inline-block m-1 hover:bg-[#fb7413]"
                >3</label
              >
            </li>
            <li>
              <input
                type="radio"
                value="Four"
                name="rating"
                id="4"
                v-model="picked"
                class="hover:bg-[#fb7413] hidden"
              />
              <label
                for="4"
                class="bg-[#2D3743] text-light-gray hover:text-white cursor-pointer py-2 px-4 text-base rounded-full inline-block m-1 hover:bg-[#fb7413]"
                >4</label
              >
            </li>
            <li>
              <input
                type="radio"
                value="Five"
                name="rating"
                id="5"
                v-model="picked"
                class="hover:bg-[#fb7413] hidden"
              />
              <label
                for="5"
                class="bg-[#2D3743] text-light-gray hover:text-white cursor-pointer py-2 px-4 text-base rounded-full inline-block m-1 hover:bg-[#fb7413]"
                >5</label
              >
            </li>
          </ul>

          <button
            class="border-1 rounded-3xl cursor-pointer text-base font-bold tracking-wider p-3 uppercase w-full bg-[#fb7413] text-white mb-4 hover:bg-white hover:text-[#fb7413]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      picked: "",
    };
  },
};
</script>

<style>
/* Give a bg color to the checked radio input */
input:checked {
  background: PaleVioletRed;
}

/* MAKE THE BUTTON ORANGE ON CLICK */
/* Style both input:checked and label using the adjacent sibling selector*/
input:checked + label {
  background-color: hsl(25, 97%, 53%);
  color: white;
}
</style>
