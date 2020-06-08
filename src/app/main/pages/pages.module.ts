import {NgModule} from '@angular/core';
import {UsersModule} from "./users/users.module";
import {DevicesModule} from "./devices/devices.module";
import {LogsModule} from "./logs/logs.module";
import { ChartsComponent } from './charts/charts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UsersComponent } from './users/users.component';
import { LogsComponent } from './logs/logs.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {FuseDirectivesModule} from "../../../@fuse/directives/directives";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FlexModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import { DeviceFormComponent } from './devices/device-form/device-form.component';
import { DevicesComponent } from './devices/devices.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    imports: [
        UsersModule,
        DevicesModule,
        LogsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        FuseDirectivesModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        FlexModule,
        CommonModule,
        MatSelectModule
    ],
    declarations: [ChartsComponent, CalendarComponent, UsersComponent, LogsComponent, UserFormComponent, DeviceFormComponent, DevicesComponent]
})
export class PagesModule
{
}
