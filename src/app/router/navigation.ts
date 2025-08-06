import { RouteNames } from '@/app/router/route-names';

interface Navigation {
  label: string;
  routeName: RouteNames;
}

export const navigation: Navigation[] = [
  {
    label: 'home',
    routeName: RouteNames.Home,
  },
  {
    label: 'demo',
    routeName: RouteNames.Demo,
  },
];
