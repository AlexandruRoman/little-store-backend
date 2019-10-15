import { Role } from 'src/role/schema';
import { ROLE } from 'src/role/list';
import { Response } from "express"
import IRequest from './interface'

export default async function controller(req: IRequest, res: Response) {
    try {
        const role = await Role.findOne({ name: ROLE.STAFF })
        return res.status(200).json(role.permissions)
    } catch (error) {
        return res.status(400).send(error)
    }
}