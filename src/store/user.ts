import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { UserInfo } from '@/api/user';
import { useApi } from '@/composable/useApi';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | undefined>();

  const { userRepo } = useApi();

  async function loadUser() {
    try {
      const { data }  = await userRepo.me();

      userInfo.value = data;
    } catch (e) {
      console.error(e);
    }
  }

  return {
    userInfo,
    loadUser,
  };
});