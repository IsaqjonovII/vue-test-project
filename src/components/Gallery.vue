<script setup>
import { ref, computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import galleryData from "../mocks";
import { moveToLeft, moveToRight } from "../utils";

const currentImgIndex = ref(0);

function nextImage() {
  if (galleryData.length - 1 === currentImgIndex.value) {
    currentImgIndex.value = 0;
  } else {
    currentImgIndex.value++;
  }
}
function prevImage() {
  if (currentImgIndex.value === 0) {
    currentImgIndex.value = galleryData.length - 1;
  } else {
    currentImgIndex.value--;
  }
}

const currentImg = computed(() => galleryData[currentImgIndex.value].img);
const handleImgClick = (id) => (currentImgIndex.value = id);
</script>

<template>
  <div class="p-4 bg-white rounded-xl">
    <div class="rounded-xl relative">
      <button
        @click="prevImage"
        class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-1/2 -left-3 hover:text-white transition-colors"
      >
        <ChevronLeftIcon class="h-5 w-5 align-middle" />
      </button>

      <div v-if="galleryData.length > 0" class="w-full h-[500px]">
        <img
          :src="currentImg"
          alt=""
          class="w-full h-full object-contain object-center rounded-xl"
        />
      </div>

      <button
        @click="nextImage"
        class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-1/2 -right-3 hover:text-white transition-colors"
      >
        <ChevronRightIcon class="h-5 w-5 align-middle" />
      </button>
    </div>
    <div class="relative">
      <div class="w-20 h-full gradient-tl absolute left-0 top-0"></div>
      <div
        class="w-full h-28 overflow-x-auto overflow-y-hidden flex items-center gap-2 py-2 no-scrollbar transition-all"
      >
        <button
          @click="moveToLeft"
          class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-[calc(1/2 - 35px)] left-3 hover:text-white transition-colors z-10"
        >
          <ChevronLeftIcon class="h-5 w-5 align-middle pointer-events-none" />
        </button>
        <img
          v-for="item in galleryData"
          :key="item.id"
          class="w-32 h-full object-cover object-center rounded-md cursor-pointer"
          :src="item.img"
          @click="() => handleImgClick(item.id)"
          alt="gallery img"
        />
        <button
          @click="moveToRight"
          class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-[calc(1/2 - 35px) right-3 hover:text-white transition-colors z-10"
        >
          <ChevronRightIcon class="h-5 w-5 align-middle pointer-events-none" />
        </button>
      </div>
      <div class="w-20 h-full gradient-tr absolute right-0 top-0"></div>
    </div>
  </div>
</template>
