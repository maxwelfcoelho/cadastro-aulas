import { Request, Response } from 'express'
import * as lecture from '../services/lecture'
import { error } from '../libs/bindError'

const create = async (req: Request<any>, res: Response<any>) => {
    try {
        const title = req.body.title
        const description = req.body.description

        await lecture.create({title, description})

        res.status(200).send('Lectured created successfully');
    } catch (err: any) {
        return error(res, err)
    }
}

export {
    create
}