<script setup>
const props = defineProps({
  text: String,
})
</script>

<template>
  <span class="text-xs font-semibold bg-[#00aa4f] text-white py-1 px-5 w-fit rounded-full">{{
    text
  }}</span>
</template>
