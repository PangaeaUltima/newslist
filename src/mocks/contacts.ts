import IconMail from '@/components/icon/IconMail.vue';
import IconPhone from '@/components/icon/IconPhone.vue';
import type { ContactItem } from '@/types';

export const CONTACTS: ContactItem[] = [
  { id: 1, icon: IconMail, href: 'mailto:info@test.com', label: 'info@test.com' },
  { id: 2, icon: IconPhone, href: 'tel:+380953908751', label: '+380 95 390 87 51' },
];