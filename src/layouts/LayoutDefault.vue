<script setup lang="ts">
import AppFooter from '@/components/app/AppFooter.vue';
import AppHeader from '@/components/app/AppHeader.vue';
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <AppHeader />
    <div class="pt-8 lg:pt-12 pb-[56px] lg:pb-[72px] grow">
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>