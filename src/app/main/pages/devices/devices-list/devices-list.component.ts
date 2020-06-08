import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FuseConfirmDialogComponent} from "../../../../../@fuse/components/confirm-dialog/confirm-dialog.component";
import {MatTableDataSource} from "@angular/material/table";
import {FormGroup} from "@angular/forms";
import {DeviceFormComponent} from "../device-form/device-form.component";
import {User} from "../../../../../interface/User";
import {Device} from "../../../../../interface/Device";
import {ServerInfoService} from "../../../../../services/server-info.service";


@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})


export class DevicesListComponent implements OnInit {
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    dialogRef: any;
    dataSource: MatTableDataSource<Device>;
    displayedColumns: string[] = ['name', 'type', 'users', 'dateActivate'];


  constructor(public _matDialog: MatDialog) { }

  ngOnInit() {
      this.dataSource = new MatTableDataSource();
      this.getDevices();
  }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    getDevices(){
      ServerInfoService.getDevices()
            .subscribe((response: Device[]) => {
                this.dataSource = new MatTableDataSource(response);
            });
    }

    deleteContact(device: any) {
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Вы точно хотите удалить это устройство?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                // this._contactsService.deleteContact(contact);
            }
            this.confirmDialogRef = null;
        });
    }

    editDevice(row) {
        this.dialogRef = this._matDialog.open(DeviceFormComponent, {
            panelClass: 'devices-form-dialog',
            data: {
                contact: row,
                action: 'edit'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if (!response) {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch (actionType) {
                    /**
                     * Save
                     */
                    case 'save':

                        // this._contactsService.updateContact(formData.getRawValue());

                        break;
                    /**
                     * Delete
                     */
                    case 'delete':

                        this.deleteContact(row);

                        break;
                }
            });
    }

}
