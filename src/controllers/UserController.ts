import User from '@services/database/schemas/User';
import { UserType } from 'types/users'

type UserInfo = {
    email?: string;
    name?: string;
}

type UpdateParams = {
    param: string;
    newValue: string;
}
class UserController {

    async store(user_info: UserInfo): Promise<UserType> {
        const user: UserType = await User.create(user_info);
        return user
    }

    async update(_id: string | string[], {param, newValue}: UpdateParams): Promise<UserType> {
        const user: UserType | null = await User.findById(_id);
        if (!user) {
            throw 'User Id not found in DB'
        }

        //@ts-ignore
        user[param] = newValue

        await User.findByIdAndUpdate(_id, user)
        return user
    }

    async delete(_id: string | string[]): Promise<UserType> {
        const user: UserType | null = await User.findByIdAndDelete(_id)
        if (!user) {
            throw 'User Id not found in DB'
        }
        return user
    }

    async show(query: UserInfo): Promise<UserType[]> {
        const users: UserType[] = await User.find(query);
        return users
    }

    async showId(_id: string | string[]): Promise<UserType> {
        const user: UserType | null = await User.findById(_id);
        if (!user) {
            throw 'User Id not found in DB'
        }
        return user
    }
}

export default new UserController;