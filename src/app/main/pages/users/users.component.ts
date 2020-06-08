import {Component, OnInit} from '@angular/core';
import {UserFormComponent} from "./user-form/user-form.component";
import {FuseSidebarService} from "../../../../@fuse/components/sidebar/sidebar.service";
import {MatDialog} from "@angular/material/dialog";
import {ServerInfoService} from "../../../../services/server-info.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {CookiesUserServiceService} from "../../../../services/cookies-user.service";
import {User} from "../../../../interface/User";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    dialogRef: any;
    searchInput: FormControl;


    private _unsubscribeAll: Subject<any>;


    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {MatDialog} _matDialog
     * @param cookies
     */
    constructor(
        private _fuseSidebarService: FuseSidebarService,
        private _matDialog: MatDialog,
        private cookies: CookieService
    ) {
        // Set the defaults
        this.searchInput = new FormControl('');
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit() {
    }

    newContact() {
        this.dialogRef = this._matDialog.open(UserFormComponent, {
            panelClass: 'contact-form-dialog',
            data: {
                action: 'new'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }

                let user: User = {
                    photo: 'assets/images/avatars/profile.jpg',
                    login: response.value.login,
                    password: response.value.password,
                    name: response.value.name,
                    second_name: response.value.secondName,
                    phone: response.value.phone,
                    email: response.value.email,
                    is_admin: response.value.role === 'Пользователь' ? 0 : 1,

                };


                ServerInfoService.addUser(user).subscribe((response) => {
                    if (response) {
                      alert("Пользователь был успешно добавлен!");
                      location.reload();
                    }
                })
            });
    }

    isAdmin() {
        return CookiesUserServiceService.isAdmin(this.cookies)
    }
}
