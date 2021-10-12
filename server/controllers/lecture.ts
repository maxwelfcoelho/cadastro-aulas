import { Request, Response } from 'express'

const create = (req: Request<any>, res: Response<any>) => {
    res.send('lecture');
};

export {
    create
}