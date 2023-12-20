import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@lab/home').then((m) => m.homeRoutes),
  },
];
