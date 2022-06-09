import { ObjectId } from 'mongoose';
import { UserType } from '../users';

export type PostType = {
    _id?: ObjectId;
    createdAt: Date;
    published: Boolean;
    filed: Boolean;
    author: ObjectId | UserType;
    text: string;
    likes: Number;
    rePost: ObjectId | PostType;
}