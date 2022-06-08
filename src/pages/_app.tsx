import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ModalProvider, PostModalContext } from "../contexts/postModal";
import { useState } from "react";
import { PostModal } from "../components/PostModal";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SessionProvider session={session}>
      <ModalProvider isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <Component {...pageProps} />
        <PostModal isOpen={isModalOpen}/>
      </ModalProvider>
    </SessionProvider>
  );
}

export default MyApp;
