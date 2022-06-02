import { UserType } from 'types/users'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@services/database/dbConnect';
import { getSession } from 'next-auth/react';
import UserController from '@controllers/UserController';

type ResponseSuccess = {
    users: UserType[];
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
        case 'GET':
            try {
                await dbConnect();

                const users: UserType[] = await UserController.show({});
                
                if(!users) return res.json({error: "Error trying to find users in DB"})
                
                return res.json({ users })
            } catch (error) {
                res.json({ error })
            }
            break;
        default:
            return res.json({ error: 'Method not allowed' })
    }
}