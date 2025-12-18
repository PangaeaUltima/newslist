<script setup lang="ts">
import type { NewsDetail } from '@/api/news';
import NewsPublishedInfo from '@/components/news/NewsPublishedInfo.vue';

defineProps<{
  news: NewsDetail
}>();
</script>

<template>
  <div>
    <div class="flex flex-col gap-4">
      <div>
        <div class="aspect-[3.51/1] rounded-lg overflow-hidden">
          <img
            class="w-full h-full object-cover"
            :src="news.image"
            :alt="news.title"
          >      
        </div>
      </div>

      <h1 class="text-h1">
        {{ news.title }}
      </h1>

      <NewsPublishedInfo
        :author="news.author"
        :published-at="news.published_at"
      />

      <div class="flex flex-col gap-6">
        <template
          v-for="(item,index) in news.content"
          :key="index"
        >
          <p
            v-if="item.type ==='p'"
            class="text-main"
          >
            {{ item.text }}
          </p>

          <div
            v-else-if="item.type === 'b'"
            class="relative flex items-stretch pl-2.5"
          >
            <div class="absolute left-0 h-full w-[2px] bg-purple rounded-xs"></div>

            <b class="text-main">{{ item.text }}</b>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>