<script setup>
import { MapPinIcon, ArrowDownTrayIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="w-full max-w-80 sticky top-8">
    <div class="w-full bg-white rounded-lg p-4 mb-6">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12">
          <img
            class="w-full h-full rounded-full border border-stroke"
            src="https://api.dicebear.com/8.x/notionists-neutral/svg?size=46&brows=variant06"
            alt=""
          />
        </div>
        <div>
          <div class="font-semibold text-lg">Marc Marquez</div>
          <div class="text-sm text-gray-400">ID: 1326547</div>
        </div>
      </div>
      <div class="font-semibold text-lg mt-3">
        <a href="tel:+998000000000">+998 00 000 00 00</a>
      </div>

      <div class="mt-3">
        <button
          class="bg-stroke w-full py-2 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-colors"
        >
          All bikes
        </button>
      </div>
    </div>
    <div class="w-full bg-white rounded-lg p-4 mb-6">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12">
          <img
            class="w-full h-full rounded-full border border-stroke"
            src="https://api.dicebear.com/8.x/notionists-neutral/svg?size=46&brows=variant06"
            alt=""
          />
        </div>
        <div>
          <div class="font-semibold text-lg">Marc Marquez</div>
          <div class="text-sm text-gray-400">ID: 1326547</div>
        </div>
      </div>
      <div class="font-semibold text-lg mt-3">
        <a href="tel:+998000000000">+998 00 000 00 00</a>
      </div>

      <div class="mt-3">
        <button
          class="bg-stroke w-full py-2 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-colors"
        >
          All bikes
        </button>
      </div>
    </div>

    <div class="w-full bg-white rounded-lg p-2 mb-6">
      <div class="px-2">
        <div class="w-full border-b border-stoke pb-2">
          <h1 class="text-xl font-bold">Location</h1>
        </div>
        <div class="py-3 flex items-center">
          <MapPinIcon class="h-6 w-6 align-middle text-blue-500 mr-2" />

          <div class="font-semibold text-lg">299, race st. MOTOGP</div>
        </div>
      </div>
      <div>
        <iframe
          class="w-full h-40 rounded-b-xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194503.05861377064!2d-3.709074403056793!3d40.384248148792516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2s!4v1714128958305!5m2!1sen!2s"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="w-full">
      <button
        class="w-full bg-[#388FF3]/20 text-[#388FF3] py-2 font-semibold rounded-md flex justify-center"
      >
        Save to Gallery <ArrowDownTrayIcon class="w-6 h-6 align-middle ml-2" />
      </button>
    </div>
  </div>
</template>
