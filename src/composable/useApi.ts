import news from '@/api/news';
import user from '@/api/user';

export const useApi = () => {
  return {
    newsRepo: news(),
    userRepo: user(),
  };
};