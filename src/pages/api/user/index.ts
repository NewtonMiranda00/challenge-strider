import { UserType } from './../../../@types/users/index';
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../database/dbConnect';
import User from '../../../database/schemas/User';
import { getSession } from 'next-auth/react';

type ResponseSuccessGet = {
    users: UserType[];
}

type ResponseSuccessPost = {
    user: UserType;
}

type ResponseError = {
    error: String | unknown;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseSuccessPost | ResponseSuccessGet | ResponseError>
) {
    const session = await getSession({ req });
    if (!session) {
        return res.status(402).json({ error: "Not Authorized" });
    }
    switch (req.method) {
        case 'GET':
            try {
                await dbConnect();
                const users: UserType[] = await User.find({});

                res.json({ users }) 
            } catch (error) {
                res.json({ error })
            }
            break;
        case 'POST':
            try {
                await dbConnect();
                const userInfo: UserType = req.body

                const user: UserType = new User(userInfo);

                res.json({ user })
            } catch (error) {
                res.json({ error })
            }
            break;
        default:
            return res.json({ error: 'Method not allowed' })
    }
}