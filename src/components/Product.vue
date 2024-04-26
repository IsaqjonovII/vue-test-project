<script setup>
import BreadCrumb from "./BreadCrumb.vue";
import Gallery from "./Gallery.vue";

const paths = ["Home", "Motorcycles", "Sportbikes", "YZF R1 2022"];
</script>

<template>
  <div class="w-full max-w-screen-lg">
    <BreadCrumb :paths="paths" />
    <Gallery />
  </div>
</template>
