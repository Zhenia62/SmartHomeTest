import {Component, OnInit} from '@angular/core';
import {UserFormComponent} from "../users/user-form/user-form.component";
import {FormControl, FormGroup} from "@angular/forms";
import {FuseSidebarService} from "../../../../@fuse/components/sidebar/sidebar.service";
import {MatDialog} from "@angular/material/dialog";
import {Subject} from "rxjs";
import {DeviceFormComponent} from "./device-form/device-form.component";

@Component({
    selector: 'app-devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

    dialogRef: any;
    searchInput: FormControl;


    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseSidebarService: FuseSidebarService,
        private _matDialog: MatDialog,
    ) {
        // Set the defaults
        this.searchInput = new FormControl('');
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {
    }

    newDevices() {
        this.dialogRef = this._matDialog.open(DeviceFormComponent, {
            panelClass: 'device-form-dialog',
            data: {
                action: 'new'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
            });
    }
}
