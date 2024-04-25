<script setup>
import { ref, onMounted, computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import galleryData from "../mocks";

const currentImgIndex = ref(0);

console.log(currentImgIndex.value);
</script>

<template>
  <div class="max-w-[835px] p-4 bg-white rounded-xl" >
    <div class="bg-red-500 rounded-xl relative">
      <button
        class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-1/2 -left-3 hover:text-white transition-colors"
      >
        <ChevronLeftIcon class="h-5 w-5 align-middle" />
      </button>

      <div class="w-full max-w-[834px] bg-red-400">
        <img :src="galleryData[currentImgIndex.value ?? 0].img" alt="" />
      </div>

      <button
        class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-1/2 -right-3 hover:text-white transition-colors"
      >
        <ChevronRightIcon class="h-5 w-5 align-middle" />
      </button>
    </div>
    <div class="flex items-center gap-3 overflow-x-hidden">
      <div v-for="item in galleryData" :key="item.id" class="w-full max-w-28">
        <img class="w-full h-28 object-cover object-center" :src="item.img" alt="gallery img">
      </div>
    </div>
  </div>
</template>
