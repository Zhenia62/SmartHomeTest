import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import {AnalyticsDashboardModule} from './main/apps/analytics/analytics.module';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';


import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {AppsModule} from './main/apps/apps.module';
import {LayoutModule} from 'app/layout/layout.module';
import {FormsModule} from '@angular/forms';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FakeDbService} from './fake-db/fake-db.service';
import {LoginModule} from 'app/main/auth/login/login.module';
import {PagesModule} from './main/pages/pages.module';
import {router} from './router';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppsModule,
        HttpClientModule,
        RouterModule.forRoot(router),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,
        // Material
        MatButtonModule,
        MatIconModule,

        LoginModule,
        PagesModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        // App modules
        LayoutModule,
        AnalyticsDashboardModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        })
    ],
    providers: [
        AnalyticsDashboardModule,
        HttpClient,
    ],
    bootstrap: [
        AppComponent,
    
    ]
})
export class AppModule {
}

