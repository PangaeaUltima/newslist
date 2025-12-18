<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import type { NewsDetail } from '@/api/news';
import NewsView from '@/components/news/NewsView.vue';
import UiBreadcrumbs from '@/components/ui/UiBreadcrumbs.vue';
import { useApi } from '@/composable/useApi';
import type { BreadcrumbItem } from '@/types';

const { newsRepo } = useApi();
const { params } = useRoute();

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Last news', to: '/' },
  { label: 'News details' },
];

const newsInfo = ref<NewsDetail | undefined>();

const loadNews = async () => {
  if (!params.id) {return;}

  try {
    const { data } = await newsRepo.view(+params.id);
    
    newsInfo.value = data;
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => loadNews());
</script>

<template>
  <section>
    <div class="container">
      <UiBreadcrumbs
        class="mb-6 lg:mb-10"
        :breadcrumbs="breadcrumbs"
      />
      
      <NewsView
        v-if="newsInfo"
        :news="newsInfo"
      />
    </div>
  </section>
</template>