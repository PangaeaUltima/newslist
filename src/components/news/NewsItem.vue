<script setup lang="ts">
import { useRouter } from 'vue-router';

import type { NewsDetail } from '@/api/news';
import NewsPublishedInfo from '@/components/news/NewsPublishedInfo.vue';

defineProps<{
  news: NewsDetail
}>();

const router = useRouter();

const openNewsPage = (id: number) => {
  router.push({ name: 'news-id', params: { id } });
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      class="aspect-[1.54/1] rounded-lg overflow-hidden"
      @click="openNewsPage(news.id)"
    >
      <img
        class="w-full h-full object-cover"
        :src="news.image"
        :alt="news.title"
      >
    </div>

    <div class="flex flex-col gap-2">
      <h2
        class="text-h2 text-purple line-clamp-2"
        @click="openNewsPage(news.id)"
      >
        {{ news.title }}
      </h2>

      <p class="text-main line-clamp-3">
        {{ news.description }}
      </p>

      <NewsPublishedInfo
        :author="news.author"
        :published-at="news.published_at"
      />
    </div>
  </div>
</template>