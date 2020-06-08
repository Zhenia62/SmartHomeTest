import {HttpClient, HttpXhrBackend} from '@angular/common/http';
import {Logs} from "../interface/Logs";
import {User} from "../interface/User";
import {Device} from "../interface/Device";
import {loginUser} from "../interface/AuthSession";

const _httpClient = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest()}));


export class ServerInfoService {

    private static host = 'http://10.34.57.5';
    private static port = ':3000';

    private static methods = {
        get_logs: '/api/get_logs',
        get_users: '/api/get_users',
        get_devices: '/api/get_devices',
        add_log: '/api/get_logs',
        add_user: '/api/add_user',
        add_device: '/api/add_device',
        delete_user: '/api/del_user',
        delete_device: '/api/del_device',
        auth: '/api/auth',

    };


    constructor() {
    }


    static getLogs() {
        return _httpClient.get(this.host + this.port + this.methods.get_logs);
    }

    static getUsers() {
        return _httpClient.get(this.host + this.port + this.methods.get_users);
    }

    static getDevices() {
        return _httpClient.get(this.host + this.port + this.methods.get_devices);
    }


    static addLog(params : Logs){
        return _httpClient.post(this.host + this.port + this.methods.add_log, params);
    }

    static addUser(params: User){
        return _httpClient.post(this.host + this.port + this.methods.add_user, params);
    }

    static addDevice(params: Device){
        return _httpClient.post(this.host + this.port + this.methods.add_device, params);
    }


    static delUser(phone) {
        return _httpClient.get(this.host + this.port + this.methods.delete_user + '?phone=' + phone);
    }

    static delDevice(name) {
        return _httpClient.get(this.host + this.port + this.methods.delete_device + '?name=' + name);
    }

    static searchUser(params: loginUser) {
        return _httpClient.post(this.host + this.port + this.methods.auth, params);
    }


    static updateUser(){

    }

    static updateDevice(){

    }

}
