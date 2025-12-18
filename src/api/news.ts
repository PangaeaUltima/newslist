import { NEWS_LIST } from '@/mocks/news';
import request from '@/utils/request';

export interface NewsDetail {
  id: number
  image: string
  author: string
  title: string
  description: string
  published_at: number
  content: { type: 'p' | 'b', text: string }[]
}
export default () => ({
  list: () => request(NEWS_LIST),
  view: (id: number) => {
    const news = NEWS_LIST.find((el) => el.id === id);

    return request(news);
  },
});