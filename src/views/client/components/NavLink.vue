<script setup>
const props = defineProps({
  link: Object,
})
</script>

<template>
  <div
    class="flex flex-col justify-center relative border-b-4 border-transparent hover:border-[#00aa4f] group"
  >
    <img
      src="../../../assets/arrow.png"
      class="h-10 absolute right-1/2 translate-x-1/2 top-[-72%] opacity-0 group-hover:opacity-100 transition-all"
      alt=""
    />
    <RouterLink
      :to="link.path"
      class="text-[#f4ead9] block px-3 py-2 text-md font-medium transition-all"
      >{{ link.name }}</RouterLink
    >
  </div>
</template>
