import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

interface ModalContextData {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
interface ModalProviderProps extends ModalContextData {
    children: ReactNode;
}

export const PostModalContext = createContext({} as ModalContextData);

export function ModalProvider({children, isModalOpen, setIsModalOpen}: ModalProviderProps) {

    const data = {isModalOpen, setIsModalOpen}

    return (
        <PostModalContext.Provider value={data}>
            {children}
        </PostModalContext.Provider>
    )

}



