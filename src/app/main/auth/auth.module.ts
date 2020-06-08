import {NgModule} from '@angular/core';

import {LoginModule} from 'app/main/auth/login/login.module';
import {RegisterModule} from 'app/main/auth/register/register.module';
import {ResetPasswordModule} from 'app/main/auth/reset-password/reset-password.module';
import {ForgotPasswordModule} from 'app/main/auth/forgot-password/forgot-password.module';

@NgModule({
    imports: [
        LoginModule,
        RegisterModule,
        ResetPasswordModule,
        ForgotPasswordModule
    ]
})
export class AuthModule
{

}
