import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {FuseSharedModule} from '@fuse/shared.module';
import {UserListComponent} from "./user-list/user-list.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {UsersComponent} from "./users.component";
import {MatRippleModule} from "@angular/material/core";
import {UserFormComponent} from "./user-form/user-form.component";
import {FuseConfirmDialogComponent} from "../../../../@fuse/components/confirm-dialog/confirm-dialog.component";


const routes = [
    {
        path     : 'users',
        component: UsersComponent
    }
];

@NgModule({
    declarations: [
        UserListComponent,

    ],
    exports: [
        UserListComponent,

    ],
    imports: [
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatInputModule,
        FuseSharedModule,
        MatTableModule,
        MatPaginatorModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
    ],entryComponents: [
        UserFormComponent,
    ]
})
export class UsersModule
{
}
