<script setup lang="ts">
import IconCalendar from '@/components/icon/IconCalendar.vue';

defineProps<{
  publishedAt: number
  author: string
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex items-center gap-2">
      <IconCalendar class="text-light-gray-200" />

      <span class="text-light-gray-200">
        {{ new Date(publishedAt * 1000).toLocaleDateString('uk-UA') }}
      </span>
    </div>

    <span class="text-light-gray-200">|</span>

    <span class="text-light-gray-200">
      written by {{ author }}
    </span>
  </div>
</template>