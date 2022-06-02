import { UserType } from 'types/users/'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@services/database/dbConnect';
import { getSession } from 'next-auth/react';
import UserController from '@controllers/UserController';

type ResponseSuccess = {
    user: UserType | null;
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
        case 'DELETE':
            try {
                await dbConnect();

                const { _id } = req.query
                const user: UserType | null = await UserController.delete(_id);

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