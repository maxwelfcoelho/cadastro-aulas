import { IUser } from "../types/IUser"
import * as db from '../libs/mysql'

const login = async (user: IUser) => {
    if (!user.email) {
        throw new Error("Please provide a email!")
    }

    if (!user.password) {
        throw new Error('Please provide a password')
    }

    const userFound: any = await db.execute('SELECT * FROM users WHERE email=?', [user.email])
    if (userFound.rowns.length === 0) {
        throw new Error('Email or password is not valid!');
    }
    
    if (user.password !== userFound.rowns[0].password) {
        throw new Error('Email or password is not valid!');
    }
}

export {
    login
}