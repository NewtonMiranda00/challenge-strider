import { UserType } from 'types/users'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@services/database/dbConnect';
import User from '@services/database/schemas/User';
import { getSession } from 'next-auth/react';
import UserController from '@controllers/UserController';

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
    // const session = await getSession({ req });
    // if (!session) {
    //     return res.status(402).json({ error: "Not Authorized" });
    // }
    switch (req.method) {
        case 'POST':
            try {
                await dbConnect();
                const {email, name}: UserType = req.body

                const user: UserType = await UserController.store({email, name})

                return res.json({ user })
            } catch (error) {
                return res.json({ error })
            }
        default:
            return res.json({ error: 'Method not allowed' })
    }
}