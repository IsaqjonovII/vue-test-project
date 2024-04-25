<script setup>
import { ref, onMounted, computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import galleryData from "../mocks";

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

function handleImgClick(id) {
  currentImgIndex.value = id;
}

function moveToLeft(e) {
  if (e.target.parentElement.scrollLeft != 0) {
    e.target.parentElement.scrollLeft -= 128 * 3;
  }
}
function moveToRight(e) {
  if (e.target.nodeName === "svg") {
    e.target.parentElement.parentElement.scrollLeft += 128 * 3;
  }
  e.target.parentElement.scrollLeft += 128 * 3;
}
</script>

<template>
  <div class="max-w-[835px] p-4 bg-white rounded-xl">
    <div class="rounded-xl relative">
      <button
        @click="prevImage"
        class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-1/2 -left-3 hover:text-white transition-colors"
      >
        <ChevronLeftIcon class="h-5 w-5 align-middle" />
      </button>

      <div v-if="galleryData.length > 0" class="w-full max-w-[834px] h-[500px]">
        <img
          :src="currentImg"
          alt=""
          class="w-full h-full object-cover object-center"
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
      <div
        class="w-full h-28 overflow-x-auto overflow-y-hidden flex items-center gap-2 py-2 no-scrollbar transition-all"
      >
        <button
          @click="moveToLeft"
          class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-[calc(1/2 - 35px)] left-3 hover:text-white transition-colors"
        >
          <ChevronLeftIcon class="h-5 w-5 align-middle" />
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
          class="p-3 bg-gray-200 rounded-full hover:bg-blue-600 absolute top-[calc(1/2 - 35px) right-3 hover:text-white transition-colors"
        >
          <ChevronRightIcon class="h-5 w-5 align-middle" />
        </button>
      </div>
    </div>
  </div>
</template>
