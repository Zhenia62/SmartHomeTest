import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FuseConfirmDialogComponent} from "../../../../../@fuse/components/confirm-dialog/confirm-dialog.component";
import {UserFormComponent} from "../user-form/user-form.component";
import {FormGroup} from "@angular/forms";
import {ServerInfoService} from "../../../../../services/server-info.service";
import {Logs} from "../../../../../interface/Logs";
import {User} from "../../../../../interface/User";



@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {

    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    dialogRef: any;
    dataSource: MatTableDataSource<User>;
    displayedColumns: string[] = ['photo', 'name', 'secondName', 'role', 'phoneNumber', 'email', 'buttons'];

    constructor(public _matDialog: MatDialog) {
    }


    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        this.getUsers();
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    deleteContact(contact: any) {
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Вы точно хотите удалить пользователя?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
                // this._contactsService.deleteContact(contact);
            }
            this.confirmDialogRef = null;
        });
    }

    getUsers() {
        ServerInfoService.getUsers()
            .subscribe((response: User[]) => {
                this.dataSource = new MatTableDataSource(response);
            });

    }


    editContact(row) {
        this.dialogRef = this._matDialog.open(UserFormComponent, {
            panelClass: 'user-form-dialog',
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

                        console.log(formData);

                        // ServerInfoService.updateUser()
                        //     .subscribe((response: User[]) => {
                        //
                        //     });

                        break;
                    /**
                     * Delete
                     */
                    case 'delete':

                        ServerInfoService.delUser(formData.value.login)
                            .subscribe((response) => {
                                if (response){
                                    alert("Пользоватлеь был успешно удален!");
                                    location.reload();
                                }
                            });

                        break;
                }
            });
    }
}
