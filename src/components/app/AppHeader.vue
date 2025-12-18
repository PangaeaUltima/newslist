<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUserStore } from '@/store/user';

const userStore = useUserStore();

const { userInfo } = storeToRefs(userStore);

onMounted(() => userStore.loadUser());

</script>

<template>
  <header class="shadow-[0_4px_10px_0_rgba(0,0,0,0.07)]">
    <div class="container flex items-center justify-between py-4">
      <RouterLink
        class="w-[120px] h-[32px]"
        :to="{ name: 'index' }"
      >
        <img
          src="@/assets/img/logo.svg"
          alt=""
        >
      </RouterLink>

      <div
        v-if="userInfo"
        class="flex items-center gap-3"
      >
        <span class="text-main">
          {{ userInfo.full_name }}
        </span>

        <div>
          <img
            :src="userInfo.avatar"
            alt="Ronnie Radke"
          >
        </div>
      </div>
    </div>
  </header>
</template>