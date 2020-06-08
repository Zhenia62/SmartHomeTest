import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {FuseSharedModule} from '@fuse/shared.module';
import {LogsListComponent} from "./logs-list/logs-list.component";
import {LogsComponent} from "./logs.component";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


const routes = [
    {
        path     : 'logs',
        component: LogsComponent
    }
];

@NgModule({
    declarations: [
        LogsListComponent
    ],
    exports: [
        LogsListComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
    ]
})
export class LogsModule
{
}
