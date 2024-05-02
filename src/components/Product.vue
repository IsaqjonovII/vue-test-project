<script setup>
import { PhoneIcon } from "@heroicons/vue/24/outline";
import BreadCrumb from "./BreadCrumb.vue";
import Gallery from "./Gallery.vue";

const paths = ["Home", "Motorcycles", "Sportbikes", "YZF R1 2022"];
</script>

<template>
  <div class="w-full max-w-screen-lg">
    <BreadCrumb :paths="paths" />
    <br />
    <div class="w-full bg-white rounded-2xl p-4">
      <Gallery />

      <!--! PRODUCT DETAILS -->
      <div class="flex items-center gap-4 pb-2 px-3">
        <div
          v-for="(path, index) in ['Motorcycles', 'Sportbike']"
          class="flex items-center gap-4 cursor-pointer hover:opacity-70"
        >
          {{ path }}
          <div
            class="w-2 h-2 bg-gray-300 rounded-full"
            v-if="index !== 1"
          ></div>
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-bold">Yamaha YZF R1 - 2022</h1>
      </div>
      <div class="flex items-center gap-4 my-4">
        <div class="py-1 px-3 bg-slate-200 rounded-md text-base">
          Yesterday, 19:20
        </div>
        <div class="py-1 px-3 bg-slate-200 rounded-md text-base">
          Madrid, Spain
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-3xl font-bold">
            257 000 000
            <span class="text-blue-400 font-semibold uppercase text-xl"
              >uzs</span
            >
          </h1>
        </div>
        <div>
          <a href="tel:+998000000000">
            <button
              class="py-2 px-4 bg-blue-500 flex items-center text-white rounded-xl"
            >
              <PhoneIcon class="w-5 h-5 align-middle mr-2" />

              <div class="font-semibold text-lg">+998 00 000 00 00</div>
            </button>
          </a>
        </div>
      </div>
    </div>
    <!--! PRODUCT DESCRIPTION -->

    <div class="w-full bg-white rounded-xl p-4 my-4">
      <h1 class="text-2xl font-semibold">Description</h1>

      <article>
        <p class="text-md mt-2 leading-relaxed">
          The Yamaha YZF-R1, or simply R1, is a 998 cc sports motorcycle made by
          Yamaha. It was first released in 1998, undergoing significant updates
          in 2000, 2002, 2004, 2006, 2007, 2009, 2015, 2018 and 2020.
        </p>

        <p class="text-md mt-2 leading-relaxed">
          Yamaha launched the YZF-R1 in 1998 after redesigning the Genesis
          engine to create a more compact engine by raising the gearbox input
          shaft and allowing the gearbox output shaft to be placed beneath it.
          This "stacked gearbox" was followed by other manufacturers. Compacting
          the engine made it much shorter, allowing the wheelbase to be
          shortened as well and the center of gravity to be optimized. The
          swingarm could be made longer without compromising the overall
          wheelbase, which was a short 1,385 mm (54.5 in). Four 40 mm Keihin CV
          carburetors fed fuel to the engine.
        </p>
        <p class="text-md mt-2 leading-relaxed">
          The R1 was also equipped with a 41 mm KYB upside-down front fork and
          300 mm semi-floating disc brakes. The instrument panel was electronic,
          with a self diagnosis system and digital speed readout. The exhaust
          used Yamaha's Exhaust Ultimate Power Valve (EXUP) system,[5] which
          controlled exhaust gas flow to maximize engine power production at all
          revs, resulting in a high-power and high-torque engine.
        </p>
      </article>
    </div>

    <div class="w-full bg-white rounded-xl p-4 my-4">
      <h1 class="text-2xl font-semibold">Seller</h1>

      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12">
            <img
              class="w-full h-full rounded-full border border-'border-500'"
              src="https://api.dicebear.com/8.x/notionists-neutral/svg?size=46&brows=variant06"
              alt=""
            />
          </div>
          <div>
            <div class="font-semibold text-lg">Marc Marquez</div>
            <div class="text-sm text-gray-400">ID: 1326547</div>
          </div>
        </div>

        <div>
          <div class="font-semibold text-lg">
            <a href="tel:+998000000000">+998 00 000 00 00</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
