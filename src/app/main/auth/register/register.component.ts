import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,

})


export class RegisterComponent implements OnInit, OnDestroy {
    response: any;
    registerForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;


    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private http: HttpClient,
        private _router: Router,
        private _cookie: CookieService
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
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------


    ngOnInit(): void {
        this.registerForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', Validators.required],
            confirm: [Validators.required],
            password: ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.registerForm.get('passwordConfirm').updateValueAndValidity();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    private addNewUser(name: any, email: any, phoneNumber: any, password: any, account: any) {
        let User = {
            name: name,
            email: email,
            phone: phoneNumber,
            password: password,
            account: account,
            isAdmin: 1
        };

        this.http.post("http://5.189.227.188:1337/api/users", {User}, {responseType: 'json'}).subscribe(data => {
            if (!data) {
                console.log(data);
            } else {
                console.log(data);
            }
        });
    }


    // addNewAccount() {
    //     const account = ServerInfoService.createNewAccount({});
    //
    //     account.subscribe(data => {
    //         const userParams = {
    //             name: this.registerForm.get('name').value,
    //             email: this.registerForm.get('email').value,
    //             phone: this.registerForm.get('phoneNumber').value,
    //             password: this.registerForm.get('password').value,
    //             account: data.params._id,
    //             isAdmin: 1,
    //         };
    //         let user = ServerInfoService.createNewUser(userParams);
    //         user.subscribe(
    //             data => {
    //                 let login = ServerInfoService.loginUser({email: userParams.email, password: userParams.password});
    //                 login.subscribe(
    //                     data => {
    //                         this._cookie.set(CookiesUserServiceService.keys.userId, data.params._id);
    //                         this._cookie.set(CookiesUserServiceService.keys.sessionId, data.params._sessionId);
    //                         this._cookie.set(CookiesUserServiceService.keys.accountId, data.params.account);
    //                         this._router.navigate(['/pages/groups']);
    //                         // TODO получены данные пользователя
    //                     },error => {
    //
    //                     });
    //                 // TODO авторизируем пользователя
    //                 console.log(data);
    //             },
    //             error => {
    //                 ServerInfoService.deleteAccountByID(data.params._id).subscribe(data =>{});
    //                 console.log("удаляем аккауни - " + data.params._id);
    //             });
    //     }, error => {
    //     });
    // }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if (!control.parent || !control) {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return null;
    }

    if (passwordConfirm.value === '') {
        return null;
    }

    if (password.value === passwordConfirm.value) {
        return null;
    }

    return {passwordsNotMatching: true};
};
