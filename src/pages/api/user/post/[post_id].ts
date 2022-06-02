import { UserType } from 'types/users'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@services/database/dbConnect';
import User from '@services/database/schemas/User';
import { getSession } from 'next-auth/react';

type ResponseSuccess = {
    user: UserType;
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
            await dbConnect();
            try {
                const { post_id } = req.query
                //FIND A POST BY ID
            } catch (error) {
                res.json({ error })
            }
            break;

        case 'DELETE':
            await dbConnect();
            try {
                const { post_id } = req.query
                //DELETE A POST BY ID
            } catch (error) {
                res.json({ error })
            }
            break;

        case 'PATCH':
            await dbConnect();
            try {
                const { post_id } = req.query
                //UPDATE A POST BY ID
            } catch (error) {
                res.json({ error })
            }
            break;
        default:
            return res.json({ error: 'Method not allowed' })
    }
}