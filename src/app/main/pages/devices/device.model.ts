import {FuseUtils} from "../../../../@fuse/utils";

export class DeviceModel {
    id: string;
    name: string;
    type: string;
    users: string;
    date_activated: string;

    /**
     * Constructor
     *
     * @param device
     */
    constructor(device) {
        {
            this.id = device.id || FuseUtils.generateGUID();
            this.name = device.name || '';
            this.type = device.type || '';
            this.users = device.users || '';
            this.date_activated = device.date_activated || '';
        }
    }
}