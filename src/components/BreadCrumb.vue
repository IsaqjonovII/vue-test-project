<script setup>
const { paths } = defineProps({ paths: Array });
</script>

<template>
  <div class="flex items-center gap-4 pb-2 px-3">
    <div v-for="(path, index) in paths" class="flex items-center gap-4 cursor-pointer hover:opacity-70">
      {{ path }}
      <div
        class="w-2 h-2 bg-gray-300 rounded-full"
        v-if="index !== paths.length - 1"
      ></div>
    </div>
  </div>
</template>
