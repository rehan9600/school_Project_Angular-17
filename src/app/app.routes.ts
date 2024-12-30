import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        // canActivate: [AuthGuard],
        // providers: [AuthGuard]
    },
    {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        // canActivate: [loggedINGuard],
        // providers: [loggedINGuard]
    },
];
