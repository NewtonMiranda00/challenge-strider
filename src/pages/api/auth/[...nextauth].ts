import { api } from "@services/api";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

type UserLoginType = {
  id: string
  name: string
  email: undefined
  image: string
}

const check_if_user_exists_on_db = async (user_query: UserLoginType) => {
  const { id: user_id, name }: UserLoginType = user_query
  const { data: { user } } = await api.get(`/user/show/${user_id}`)
  if (user !== []) {
    return true
  } else {
    await api.post(`/user/store`, { user_id, name })
    return true
  }
}

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      authorization: { params: { scope: "read:user" } },
    }),
  ],
  callbacks: {
    //@ts-ignore
    async signIn({ user }) {
      return check_if_user_exists_on_db(user);
    },
  }
}
export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);

