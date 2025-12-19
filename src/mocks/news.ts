import type { NewsDetail } from '@/api/news';

// Можна переробити структуру на HTML та впровадити за допомогою дірективи v-html.
const content: { type: 'p' | 'b', text: string }[] = [
  { type: 'p', text: 'Consumers are delaying electric vehicle purchases as charging availability and rising costs continue to raise concerns, despite strong long-term market forecasts.' },
  { type: 'p', text: 'Electric vehicle (EV) sales have shown signs of slowing in several key markets, highlighting growing consumer hesitation around charging infrastructure and overall ownership costs. While demand for electric cars remains significantly higher than just a few years ago, recent data suggests that adoption is no longer accelerating at the pace many manufacturers had anticipated.' },
  { type: 'p', text: 'One of the primary challenges remains the limited availability of reliable public charging stations. In urban areas, drivers often face long wait times, while in rural regions charging networks are still sparse or nonexistent. This lack of consistency has made potential buyers more cautious, particularly those who rely on long-distance travel or do not have access to home charging.' },
  { type: 'p', text: 'Cost concerns are also playing a major role. Although battery prices have gradually decreased, electric vehicles often still carry higher upfront costs compared to traditional combustion-engine cars. In addition, rising electricity prices in some regions have reduced the perceived savings of switching to electric.' },
  { type: 'b', text: '“Range anxiety is no longer the only issue — convenience and cost predictability are becoming equally important for consumers,” said an industry analyst.' },
  { type: 'p', text: 'Automakers and governments continue to invest heavily in expanding charging infrastructure, with new fast-charging networks and incentives planned for the coming years. Several manufacturers have also announced more affordable models aimed at first-time EV buyers.' },
  { type: 'p', text: 'Despite the current slowdown, experts remain optimistic about the long-term outlook for electric vehicles. Stricter emissions regulations, technological advancements, and ongoing infrastructure development are expected to support renewed growth in the market over the next decade.' },
  { type: 'p', text: 'For now, however, the pace of adoption appears to be entering a more cautious phase, as consumers weigh environmental benefits against practical, everyday considerations.' },
];

export const NEWS_LIST: NewsDetail[]  = [
  {
    id: 1,
    image: '/images/news/1.png',
    author: 'Eddie Munson',
    title: 'Markets on edge as global inflation concerns return',
    description: 'Investors remain cautious as new economic data revives fears of prolonged inflation and slower global growth.',
    published_at: 1765814681,
    content,
    
  },
  {
    id: 2,
    image: '/images/news/2.png',
    author: 'Will Buyers',
    title: 'Tech giants face growing pressure over AI regulation',
    description: 'Governments worldwide are increasing scrutiny on artificial intelligence, calling for clearer rules and accountability.',
    published_at: 1765722621,
    content,
  },
  {
    id: 3,
    image: '/images/news/3.png',
    author: 'Will Buyers',
    title: 'Healthcare systems adapt to rising demand for mental health support',
    description: 'Public and private providers are expanding services as awareness and demand continue to grow across multiple regions.',
    published_at: 1765722321,
    content,
  },
  {
    id: 4,
    image: '/images/news/4.png',
    author: 'Eddie Munson',
    title: 'Electric vehicle sales slow amid charging infrastructure concerns',
    description: 'Despite long-term growth, consumers remain hesitant due to limited charging availability and high costs.',
    published_at: 1765621483,
    content,
  },
  {
    id: 5,
    image: '/images/news/5.png',
    author: 'Mike Wheeler',
    title: 'Major streaming platforms rethink content strategies',
    description: 'Media companies are adjusting production and release plans in response to changing viewer habits.',
    published_at: 1765539801,
    content,
  },
  {
    id: 6,
    image: '/images/news/6.png',
    author: 'Will Buyers',
    title: 'Severe weather disrupts travel across parts of Europe',
    description: 'Heavy storms and flooding have caused delays and cancellations, affecting thousands of passengers.',
    published_at: 1765539801,
    content,
  },
];