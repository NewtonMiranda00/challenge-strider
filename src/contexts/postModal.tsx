import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ModalProviderProps {
    children: ReactNode;
}

interface ModalContextData {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({children}: ModalProviderProps) {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const data = {isModalOpen, setIsModalOpen}

    return (
        <ModalContext.Provider value={data}>
            {children}
        </ModalContext.Provider>
    )

}



