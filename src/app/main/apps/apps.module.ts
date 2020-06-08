import {NgModule} from '@angular/core';
import {FuseSharedModule} from '@fuse/shared.module';
import {AnalyticsDashboardModule} from './analytics/analytics.module';

@NgModule({
    declarations:[

    ],
    imports     : [
        FuseSharedModule,
        AnalyticsDashboardModule,
        AnalyticsDashboardModule
    ]
})
export class AppsModule
{
}
