<script setup>
import {
  PhoneIcon,
  HeartIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/vue/24/outline";

const data = [
  {
    label: "O'zbek",
    value: "uz",
  },
  {
    label: "Russian",
    value: "ru",
  },
];
</script>

<template>
  <header class="flex bg-[#ffffff92] h-20 px-5">
    <div
      class="h-full flex justify-between items-center w-full max-w-screen-2xl mx-auto"
    >
      <div class="flex justify-between items-center gap-4">
        <select
          class="text-black border-none outline-none text-base cursor-pointer rounded-md p-2 bg-transparent hover:bg-baseBg"
        >
          <option v-for="item in data" class="list" :value="item.value">
            {{ item.label }}
          </option>
        </select>
        <div class="flex items-center justify-between">
          <PhoneIcon class="w-6 h-6 text-[#B8BBBD]" />
          <a href="tel:998712007007" class="font-semibold text-black"
            >+998 71 200 70 07</a
          >
        </div>
      </div>
      <div
        class="flex justify-center self-start items-end cursor-pointer w-full h-[100px] max-w-44 border border-stroke bg-white pb-2 rounded-b-lg"
      >
        <div class="header__logo flex">
          <img src="../assets/logo.svg" alt="" />
        </div>
      </div>

      <div class="flex items-center justify-between gap-5 text-base">
        <div class="flex items-center justify-between font-semibold">
          <HeartIcon class="w-6 h-6 mr-2 text-blue-500" />
          Liked
        </div>
        <div class="w-[1px] h-12 bg-stroke"></div>
        <button
          class="flex items-center justify-between gap-2 cursor-pointer bg-baseBg px-3 py-2 font-semibold"
        >
          Login
          <ArrowRightEndOnRectangleIcon class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
</template>
