<script setup lang="ts">
import { onMounted, ref } from 'vue';

import type { NewsDetail } from '@/api/news';
import NewsItem from '@/components/news/NewsItem.vue';
import { useApi } from '@/composable/useApi';

const { newsRepo } = useApi();

const newsList = ref<NewsDetail[]>([]);

async function loadNews() {
  try {
    const { data } = await newsRepo.list();    

    newsList.value = data;
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => loadNews());
</script>

<template>
  <section>
    <div class="container">
      <h1 class="text-h1 mb-6 lg:mb-10">
        Last news
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 gap-x-7.5">
        <NewsItem
          v-for="item in newsList"
          :key="item.id"
          :news="item"
        />
      </div>
    </div>
  </section>
</template>