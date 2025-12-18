import type { Component } from 'vue';
import type { RouteLocationRaw } from 'vue-router';

export type BreadcrumbItem = {
  label: string
  to?: RouteLocationRaw
};

export type ContactItem = {
  id: number
  icon: Component
  href: string
  label: string
};