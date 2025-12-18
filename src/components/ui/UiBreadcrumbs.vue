<script setup lang="ts">
import { RouterLink } from 'vue-router';

import type { BreadcrumbItem } from '@/types';
defineProps<{
  breadcrumbs: BreadcrumbItem[]
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <template
      v-for="(item, index) in breadcrumbs"
      :key="index"
    >
      <RouterLink
        v-if="item.to"
        :to="item.to"
        class="text-purple"
      >
        {{ item.label }}
      </RouterLink>

      <span
        v-else
        class="text-light-gray-200"
      >
        {{ item.label }}
      </span>

      <span
        v-if="index !== breadcrumbs.length - 1"
        class="text-light-200"
      >/</span>
    </template>
  </div>
</template>