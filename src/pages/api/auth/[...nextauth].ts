import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      authorization: { params: { scope: "read:user" } },
    }),
  ],
}
export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);

