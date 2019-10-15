import { Response } from "express"
import IRequest from './interface'
import { User } from "src/user/schema";
import { Role } from "src/role/schema";
import { ROLE } from "src/role/list";
import * as bcrypt from 'bcrypt'
import { createClient } from "src/client/dal";
import { createClientAnalytics } from "src/client-analytics/dal";

export default async function controller(req: IRequest, res: Response) {
    try {
        const role = await Role.findOne({ name: ROLE.CLIENT })
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role: role.id
        })
        await user.validate()
        await createClient(user.id)
        await createClientAnalytics(user.id)
        await user.save()
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        return res.status(400).send(error)
    }
}