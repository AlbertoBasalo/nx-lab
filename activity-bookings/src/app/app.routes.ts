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
  {
    path: 'activities',
    loadChildren: () =>
      import('@lab/activities').then((m) => m.activitiesRoutes),
  },
  {
    path: 'bookings',
    loadChildren: () => import('@lab/bookings').then((m) => m.bookingsRoutes),
  },
];
