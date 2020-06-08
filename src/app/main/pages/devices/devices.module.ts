import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {FuseSharedModule} from '@fuse/shared.module';
import {DevicesListComponent} from "./devices-list/devices-list.component";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {DevicesComponent} from "./devices.component";
import {DeviceFormComponent} from "./device-form/device-form.component";
import {MatPaginatorModule} from "@angular/material/paginator";


const routes = [
    {
        path     : 'devices',
        component: DevicesComponent
    }
];

@NgModule({
    declarations: [
        DevicesListComponent
    ],
    exports: [
        DevicesListComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        FuseSharedModule,
        MatTableModule,
        MatMenuModule,
    ], entryComponents:[
        DeviceFormComponent
    ]
})
export class DevicesModule
{
}
