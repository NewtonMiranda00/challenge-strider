import { ObjectId } from "mongoose"
import { PostType } from "../posts"

export type UserType = {
    _id?: ObjectId
    email: String
    name: String
    posts: PostType[]
    profile: {
        bio: String
    }
    following: UserType[]
    followers: UserType[]
}
