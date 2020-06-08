import {Routes} from '@angular/router';

export const router: Routes = [
    {
        path: 'pages',
        loadChildren: './main/pages/pages.module#PagesModule',
    },
    {
        path: 'pages',
        loadChildren: './main/pages/pages.module#PagesModule',
    },
    {
        path: 'pages',
        loadChildren: './main/pages/pages.module#PagesModule',
    },

    {
        path: 'auth',
        loadChildren: './main/auth/auth.module#AuthModule'
    },
    {
        path: 'main',
        loadChildren: './main/apps/apps.module#AppsModule',
    },
    {
        path: '**',
        redirectTo: 'auth'
    }
];