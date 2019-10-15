import { User } from './../../schema';
import { Role } from 'src/role/schema';
import { ROLE } from 'src/role/list';
import { Response } from "express"
import IRequest from './interface'
import { hash } from 'bcrypt';

export default async function controller(req: IRequest, res: Response) {
    try {
        const role = await Role.findOne({ name: ROLE.STAFF })
        const { name, email, password } = req.body
        const hashedPassword = await hash(password, 10)
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role: role.id
        })
        await user.validate()
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).send(error)
    }
}