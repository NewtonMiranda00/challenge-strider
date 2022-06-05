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
      const { id: user_id, name }: UserLoginType = user
      const { data } = await api.get(`/user/show/${user_id}`)
      if (data.user !== []) {
        return true
      } else {
        await api.post(`/user/store`, { user_id, name })
        return true
      }
    },
  }
}
export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);

