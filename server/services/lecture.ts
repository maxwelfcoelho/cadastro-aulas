import { ILecture } from '../types/ILecture'
import * as db from '../libs/mysql'

const list = async () => {
    const lectures = await db.execute('SELECT * from lectures')
    return lectures.rowns
}

const get = async (id: string) => {
    const lecture: any = await db.execute('SELECT * FROM lectures WHERE id=?', [id])
    if (lecture.rowns.length === 0) {
        throw new Error('Lecture is not found')
    }
    
    return lecture.rowns
}

const create = async (lecture: ILecture) => {
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ')

    if (!lecture.title) {
        throw new Error('Please provide a title!')
    }

    if (!lecture.description) {
        throw new Error('Please provide a description!')
    }

    await db.execute('INSERT INTO lectures (title, description, createdAt) VALUES (?, ?, ?)', [lecture.title, lecture.description, createdAt])

    return true;
};

const update = async (lecture: ILecture) => {
    if (!lecture.id) {
        throw new Error('Please provide an id')
    }

    const lectureFound: any = await db.execute('SELECT * FROM lectures WHERE id=?', [lecture.id])
    if (lectureFound.rowns.length == 0) {
        throw new Error('The lecture is not found')
    }

    await db.execute('UPDATE lectures set title=?, description=? WHERE id=?', [lecture.title, lecture.description, lecture.id])
    
    return true
}

const remove = async (id: number) => {
    if (!id) {
        throw new Error('Please provide an id!')
    }

    const lecture: any = await db.execute('SELECT * FROM lectures WHERE id=?', [id])
    if (lecture.rowns.length === 0) {
        throw new Error('Lecture is not found!')
    }

    await db.execute('DELETE FROM lectures WHERE id=?', [id])
}

export {
    list,
    get,
    create,
    update,
    remove
}
