import { UserType } from '../../../../../@types/users/index';
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../../../database/dbConnect';
import User from '../../../../../database/schemas/User';
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
        case 'POST':
            try {
                await dbConnect();
                //CREATE A USER POST
            } catch (error) {
                res.json({ error })
            }
            break;
        default:
            return res.json({ error: 'Method not allowed' })
    }
}