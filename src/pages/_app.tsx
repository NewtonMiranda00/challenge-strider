import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ModalProvider, ModalContext } from "../contexts/postModal";
import Modal from "react-modal";
import { useContext } from "react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { isModalOpen } = useContext(ModalContext);

  return (
    <SessionProvider session={session}>
      <ModalProvider>
        <Component {...pageProps} />
        <Modal isOpen={isModalOpen} />
      </ModalProvider>
    </SessionProvider>
  );
}

export default MyApp;
