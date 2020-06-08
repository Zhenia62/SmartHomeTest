import {Component, Inject, OnInit} from '@angular/core';
import {UserModel} from "../user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CookiesUserServiceService} from "../../../../../services/cookies-user.service";
import {CookieService} from "ngx-cookie-service";


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    action: string;
    contact: UserModel;
    contactForm: FormGroup;
    dialogTitle: string;
    selected : string;
    password: string;

  constructor( public matDialogRef: MatDialogRef<UserFormComponent>,
               private cookies: CookieService,
               @Inject(MAT_DIALOG_DATA) private _data: any,
               private _formBuilder: FormBuilder) {
      this.action = _data.action;

      if ( this.action === 'edit' ){
          this.dialogTitle = 'Редактирование пользователя';
          this.contact = _data.contact;
      }else{
          this.dialogTitle = 'Создание';
          this.contact = new UserModel({});
      }

      this.contactForm = this.createContactForm();
  }

  ngOnInit() {
  }

    createContactForm(): FormGroup {
        return this._formBuilder.group({
            id     : [this.contact.id],
            name    : [this.contact.name],
            login: [this.contact.login],
            password: '',
            second_name: [this.contact.second_name],
            email   : [this.contact.email],
            phone   : [this.contact.phone],
            role   : [this.contact.is_admin === 1? this.selected = "Администратор" : this.selected = "Пользователь"]
        });
    }

    isAdmin() {
        return CookiesUserServiceService.isAdmin(this.cookies)
    }
}
