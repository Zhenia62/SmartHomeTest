import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

import {loginUser} from '../../../../interface/AuthSession';
import {ServerInfoService} from "../../../../services/server-info.service";
import {Logs} from "../../../../interface/Logs";
import {MatTableDataSource} from "@angular/material/table";
import {User} from "../../../../interface/User";
import {CookiesUserServiceService} from "../../../../services/cookies-user.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})


export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    response: any;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param http
     * @param router
     * @param cookies
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private cookies: CookieService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: false
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            login: ['', [Validators.required]],
            password: ['', Validators.required]
        });
    }

    onActive() {

        let Login : loginUser = {
            login: this.loginForm.get('login').value,
            password: this.loginForm.get('password').value,
        };

        ServerInfoService.searchUser(Login).subscribe((response: User) => {
            if(response){
                CookiesUserServiceService.setUserCookies(this.cookies, response.login);
                CookiesUserServiceService.setSessionCookies(this.cookies, response._id);
                CookiesUserServiceService.setAdminCookies(this.cookies, response.is_admin);

                this.router.navigate(['/']);
            }
            else alert("Введен неверный логин или пароль")
        });
    }
}
