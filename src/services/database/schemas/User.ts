import { UserType } from 'types/users';
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema<UserType>({
    name: {
        type: String,
        required: true
    },
    posts: {
        type: [ Schema.Types.ObjectId ],
        ref: 'Post'
    },
    profile: {
        bio: {
            type: String,
            default: ''
        }
    },
    followers: {
        type: [ Schema.Types.ObjectId ],
        default: [],
        ref: 'User'
    },
    following: {
        type: [ Schema.Types.ObjectId ],
        default: [],
        ref: 'User'
    }
}, { timestamps: true });

export default models.User || model<UserType>("User", UserSchema);
