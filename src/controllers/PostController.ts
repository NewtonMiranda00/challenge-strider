type PostType = {}
type QueryParamsType = {}

class PostController {
    /**
     * @param { PostType } post - Recieves all post infos
        @returns {PostType}
     */
    async store(post: PostType): Promise<PostType> {
        return 'post'
    }
    
    /**
     * 
     * @param { String } id
        @param {object} params
        @returns {PostType}
     */
    async update(id: String, params: object = {}): Promise<PostType> {
        return 'newpost'
    }

    /**
     * 
     * @param { String } id
     * @returns {PostType}
     */
    async delete(id: String): Promise<PostType> {
        return 'deleted post'
    }
    /**
     * @param {QueryParamsType} query
     * @returns {PostType} 
     */
    async show(query: QueryParamsType): Promise<PostType> {
        return 'post'
    }


}

export default new PostController;