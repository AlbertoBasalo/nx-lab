import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@lab/home').then((m) => m.homeRoutes),
  },
  {
    path: 'user',
    loadChildren: () => import('@lab/user').then((m) => m.userRoutes),
  },
];
