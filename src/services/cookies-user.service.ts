import {CookieService} from "ngx-cookie-service";

export class CookiesUserServiceService {

    /**
     * Constructor
     *
     * @param cookies
     */
    constructor( private cookies: CookieService) {
    }

    static keys = {
        user: 'user_login',
        session: 'session_id',
        admin: 'is_admin',
    };

    static getSessionId(){
        return Math.round(Math.random() * (999 - 100) + 100) + '#.:.#';
    }

    static setUserCookies(cookies: CookieService, value){
        cookies.set(this.keys.user, value);
    }

    static setSessionCookies(cookies: CookieService, value){
        cookies.set(this.keys.session, this.getSessionId() + value);
    }

    static deleteAllCookies(cookies: CookieService){
        cookies.delete(this.keys.session);
        cookies.delete(this.keys.user);
        cookies.delete(this.keys.admin);
    }

    static setAdminCookies(cookies: CookieService, value){
        cookies.set(this.keys.admin, value);
    }

    static isAdmin(cookies: CookieService){
        return cookies.get(this.keys.admin) === '1';
    }
}