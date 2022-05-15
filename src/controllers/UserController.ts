type UserType = {}
type QueryParamsType = {}

class UserController {
    /**
     * @param { UserType } user - Recieves all user infos
        @returns {UserType}
     */
    async store(user: UserType): Promise<UserType> {
        return 'user'
    }
    
    /**
     * 
     * @param id 
        @returns {UserType}
     */
    async update(id: String, params = {}): Promise<UserType> {
        return 'newuser'
    }

    /**
     * 
     * @param { String } id
     * @returns {UserType}
     */
    async delete(id: String): Promise<UserType> {
        return 'deleted user'
    }
    /**
     * @param {QueryParamsType} query
     * @returns {UserType} 
     */
    async show(query: QueryParamsType): Promise<UserType> {
        return 'user'
    }


}

export default new UserController;