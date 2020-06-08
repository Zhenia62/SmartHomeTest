interface paramsCreateUser {
    name: string,
    password: string,
    phone?: string,
    email: string,
    group?: string,
    account?: string,
    isAdmin?: number
}

interface paramsUpdateUser {
    name?: string,
    password?: string,
    phone?: string,
    email?: string,
    group?: string,
    account?: string,
    isAdmin?: number
}

interface responseParamsCreateUser {
    status: string,
    params: {
        account: string,
        email: string,
        isAdmin: any,
        name: string,
        phone: number,
        _createAt: string,
        _updateAt: string,
        _id: string,
        _isOnline: boolean,
        _sessionId: string
    }
}
export {paramsCreateUser, paramsUpdateUser, responseParamsCreateUser}