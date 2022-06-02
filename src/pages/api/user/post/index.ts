import { PostType } from 'types/posts';
import { UserType } from 'types/users'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@services/database/dbConnect';
import User from '@services/database/schemas/User';
import { getSession } from 'next-auth/react';

type ResponseSuccess = {
    posts: PostType[];
}

type ResponseError = {
    error: String | unknown;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseSuccess | ResponseError>
) {
    const session = await getSession({ req });
    if (!session) {
        return res.status(402).json({ error: "Not Authorized" });
    }
    switch (req.method) {
        case 'GET':
            try {
                await dbConnect();
                //GET ALL USERS POST
            } catch (error) {
                res.json({ error })
            }
            break;
        default:
            return res.json({ error: 'Method not allowed' })
    }
}