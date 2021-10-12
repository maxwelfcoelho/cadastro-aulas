import { ILecture } from '../types/ILecture'
import * as db from '../libs/mysql'

const create = async (lecture: ILecture) => {
    const date = new Date();
    const createdAt = `${date.getUTCFullYear()}-${date.getUTCMonth()+1}-${date.getUTCDate()}`

    if (!lecture.title) {
        throw new Error('Please provide a title!')
    }

    if (!lecture.description) {
        throw new Error('Please provide a description!')
    }

    await db.execute('INSERT INTO lectures (title, description, createdAt) VALUES (?, ?, ?)', [lecture.title, lecture.description, createdAt])

    return true;
};

export {
    create
}