import { UserType } from 'types/users/'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@services/database/dbConnect';
import User from '@services/database/schemas/User';
import { getSession } from 'next-auth/react';

type ResponseSuccess = {
    user: UserType[] | null;
}

type ResponseError = {
    error: string | unknown | null;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseSuccess | ResponseError>
) {
    // const session = await getSession({ req });
    // if (!session) {
    //     return res.status(402).json({ error: "Not Authorized" });
    // }
    switch (req.method) {
        case 'GET':
            try {
                await dbConnect();

                const { user_id } = req.query
                const user: UserType[] | null = await User.findById(user_id, {following: 1, followers: 1});

                if (!user) {
                    return res.json({ error: "User not found in database" })
                }

                return res.json({ user })
            } catch (error) {
                return res.json({ error })
            }
        default:
            return res.json({ error: 'Method not allowed' })
    }
}