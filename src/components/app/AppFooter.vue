<script setup lang="ts">
import { CONTACTS } from '@/mocks/contacts';
</script>

<template>
  <footer class="shadow-[0_-4px_10px_0_rgba(0,0,0,0.07)]">
    <div class="container py-8 flex flex-col md:flex-row items-center justify-between">
      <span class="text-small max-md:mb-4">
        Copyright 2025 Test. All rights reserved.
      </span>

      <div class="flex items-center gap-x-6">
        <a
          v-for="contact in CONTACTS"
          :key="contact.id"
          :href="contact.href"
          class="flex items-center gap-x-2 text-purple"
        >
          <component
            :is="contact.icon"
          />
          
          <span class="text-small">
            {{ contact.label }}
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>