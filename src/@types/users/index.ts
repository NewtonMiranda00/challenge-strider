import { ObjectId } from "mongoose"
import { PostType } from "../posts"

export type UserType = {
    _id?: ObjectId;
    createdAt: Date;
    email: string;
    name: string;
    posts: ObjectId[] | PostType[];
    profile: {
        bio: string;
    };
    following: ObjectId[] | UserType[];
    followers: ObjectId[] | UserType[];
}
