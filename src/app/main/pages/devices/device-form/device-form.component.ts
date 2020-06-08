import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DeviceModel} from "../device.model";


@Component({
    selector: 'app-device-form',
    templateUrl: './device-form.component.html',
    styleUrls: ['./device-form.component.scss']
})
export class DeviceFormComponent implements OnInit {
    action: string;
    device: DeviceModel;
    deviceForm: FormGroup;
    dialogTitle: string;

    constructor(public matDialogRef: MatDialogRef<DeviceFormComponent>,
                @Inject(MAT_DIALOG_DATA) private _data: any,
                private _formBuilder: FormBuilder) {
        this.action = _data.action;


        if (this.action === 'edit') {
            this.dialogTitle = 'Редактирование устройства';
            this.device = _data.device;
        } else {
            this.dialogTitle = 'Создание устройства';
            this.device = new DeviceModel({});
        }

        this.deviceForm = this.createDeviceForm();
    }

    ngOnInit() {
    }


    createDeviceForm(): FormGroup {

        return this._formBuilder.group({

        });
    }
}
