import { Request, Response } from 'express'
import * as lecture from '../services/lecture'
import { error } from '../libs/bindError'

const list = async (req: Request<any>, res: Response<any>) => {
    const lectures = await lecture.list()

    return res.status(200).json(lectures);
}

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

const update = async (req: Request<any>, res: Response<any>) => {
    try {
        const id = req.body.id
        const title = req.body.title
        const description = req.body.description

        await lecture.update({id, title, description})

        res.status(200).send('The lecture is updated sucessfully')
    } catch (err) {
        return error(res, err)
    }
}

const remove = async (req: Request<any>, res: Response<any>) => {
    try {
        const id: number = req.body.id

        if (!id) {
            return res.status(400).send('Please, provide an id!')
        }

        await lecture.remove(id);

        res.status(200).send('Lecture deleted successfully')
    } catch(err: any) {
        return error(res, err)
    }
}

export {
    list,
    create,
    update,
    remove
}