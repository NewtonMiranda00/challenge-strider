import { ObjectId } from "mongoose"
import { PostType } from "../posts"

export type UserType = {
    _id?: ObjectId
    email: string
    name: string
    posts: PostType[]
    profile: {
        bio: string
    }
    following: UserType[]
    followers: UserType[]
}
