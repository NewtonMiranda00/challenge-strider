import { UserType } from 'types/users'
import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema<UserType>({
    user_id: {
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
            default: ''
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