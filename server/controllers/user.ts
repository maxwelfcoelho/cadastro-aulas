import { Request, Response } from 'express'
import * as user from '../services/user'
import { error } from '../libs/bindError'

const login = async (req: Request<any>, res: Response<any>) => {
    try {
        const email: string = req.body.email
        const password: string = req.body.password
        await user.login({ email, password })

        res.send('Logged successfully')
    } catch (err: any) {
        return error(res, err)
    }
}

export {
    login
}