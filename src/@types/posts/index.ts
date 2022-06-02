import { UserType } from "../users.

export type PostType = {
    id: String
    createdAt: Date
    title: String
    published: Boolean
    author: UserType
    authorId: String
}