import {FuseUtils} from "../../../../@fuse/utils";

export class UserModel {
    id: string;
    name: string;
    login: string;
    password: string;
    second_name: string;
    avatar: string;
    email: string;
    phone: string;
    is_admin: number;

    /**
     * Constructor
     *
     * @param user
     */
    constructor(user) {
        {
            this.id = user.id || FuseUtils.generateGUID();
            this.name = user.name || '';
            this.login = user.login || '';
            this.password = user.password || '';
            this.second_name = user.second_name || '';
            this.is_admin = user.is_admin || '';
            this.avatar = user.avatar || 'assets/images/avatars/profile.jpg';
            this.email = user.email || '';
            this.phone = user.phone || '';

        }
    }
}