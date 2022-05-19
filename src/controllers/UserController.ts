import { UserType } from '../@types/users';

class UserController {

    async store(user: UserType): Promise<UserType> {
       
    }


    async update(id: String, params = {}): Promise<UserType> {
        

        return 'newuser'
    }


    async delete(id: String): Promise<UserType> {


        return 'deleted user'
    }


    async show(query: QueryParamsType): Promise<UserType> {
        try {
            
        } catch (error) {
            
        }

        return 'user'
    }

    async follow(id: String) {


    }
    async unfollow(id: String) {


    }
}

export default new UserController;