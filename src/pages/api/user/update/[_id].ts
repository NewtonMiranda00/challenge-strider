import UserController from '@controllers/UserController';
import { UserType } from 'types/users/'
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@services/database/dbConnect';
import User from '@services/database/schemas/User';
import { getSession } from 'next-auth/react';

type ResponseSuccess = {
    user: UserType | null;
}

type ResponseError = {
    error: string | unknown | null;
}

type PatchParamsType = {
    param: string;
    newValue: string;
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
        case 'PATCH':
            try {
                await dbConnect();

                const { _id } = req.query
                const { param, newValue }: PatchParamsType = req.body

                
                const user: UserType = await UserController.update(_id, {param, newValue})
                
                return res.json({ user })
            } catch (error) {
                return res.json({ error })
            }
        default:
            return res.json({ error: 'Method not allowed' })
    }
}