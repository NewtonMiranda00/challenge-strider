import { UserType } from './../../@types/users/index';
import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema<UserType>({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    posts: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    profile: {
        bio: {
            type: String,
            default: []
        }
    },
    followers: {
        type: [],
        default: []
    },
    following: {
        type: [],
        default: []
    },
}, { timestamps: true });

export default models.User || model<UserType>("User", UserSchema);