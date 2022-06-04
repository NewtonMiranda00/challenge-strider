import { UserType } from 'types/users'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@services/database/dbConnect';
import { getSession } from 'next-auth/react';
import UserController from '@controllers/UserController';

type ResponseSuccess = {
    user: UserType[];
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

                const {_id} = req.query

                const user: UserType[] = await UserController.showId(_id);
                
                if(!user) return res.json({error: "Error trying to find users in DB"})
                
                return res.json({user})
            } catch (error) {
                res.json({ error })
            }
            break;
        default:
            return res.json({ error: 'Method not allowed' })
    }
}