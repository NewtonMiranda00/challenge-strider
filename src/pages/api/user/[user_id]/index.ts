import { UserType } from '../../../../@types/users/index';
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../../database/dbConnect';
import User from '../../../../database/schemas/User';
import { getSession } from 'next-auth/react';

type ResponseSuccess = {
    user: UserType;
}

type ResponseError = {
    error: String | unknown;
}

type PatchParamsType = {
    param: string;
    newValue: String;
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

                const { user_id } = req.query
                const user: UserType | null = await User.findById(user_id);

                if (!user) {
                    return res.json({ error: "User not found in database" })
                }

                res.json({ user })
            } catch (error) {
                res.json({ error })
            }
            break;
        
        case 'PATCH':
            try {
                // await dbConnect();

                // const { user_id } = req.query
                // const {param, newValue}: PatchParamsType = req.body

                // const user: UserType | null = await User.findById(user_id);
                // if (!user) {
                //     return res.json({ error: "User not found in database" })
                // }

                
                // user[param] = newValue

                // res.json({ user })
            } catch (error) {
                res.json({ error })
            }
            break;

        case 'DELETE':
            try {
                await dbConnect();

                const { user_id } = req.query
                const user: UserType | null = await User.findByIdAndDelete(user_id);

                if (!user) {
                    return res.json({ error: "User not found in database" })
                }

                res.json({ user })
            } catch (error) {
                res.json({ error })
            }
            break;
        default:
            return res.json({ error: 'Method not allowed' })
    }
}