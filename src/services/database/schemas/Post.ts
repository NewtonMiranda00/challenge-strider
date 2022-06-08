import { PostType } from 'types/posts';
import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema<PostType>({
  published: {
    type: Boolean,
    default: true
  },
  filed: {
    type: Boolean,
    default: false
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  rePost: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }
}, { timestamps: true });
