import { Button } from "../button";
import { LogoutButton } from "../button/LogOut";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { PostModalContext } from "../../contexts/postModal";
import Link from "next/link";
import { useContext } from "react";

export function NavBar() {
  const { data: session } = useSession();
  const {isModalOpen, setIsModalOpen} = useContext(PostModalContext);

  return (
    <nav className="flex items-center justify-center flex-wrap bg-lightGray p-3">
      <div className="flex items-center flex-shrink-0 text-white justify-between w-3/4">
        <Link href="/">
          <a className="flex items-center justify-items-center gap-2 font-semibold">
            <Image src="/logo.svg" width="60" height="50" />
            <span className="text-3xl">STRIDER</span>
          </a>
        </Link>
        {session ? (
          <div className="flex gap-4 items-center">
            <div className="flex gap-4">
              <LogoutButton onClick={() => signOut()} />
              <Button onClick={() => {setIsModalOpen(true); console.log(isModalOpen)}}>New Post</Button>
            </div>
            <Link href={`/user/${session.user?.name}`}>
              <a>
                <Image
                  src={session.user?.image ?? "null"}
                  width="70"
                  height="70"
                  className="rounded-full"
                />
              </a>
            </Link>
          </div>
        ) : (
          <Button onClick={() => {
            signIn("github")
            }}>Log In</Button>
        )}
      </div>
    </nav>
  );
}
