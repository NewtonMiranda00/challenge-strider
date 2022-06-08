import { useContext } from "react";
import Modal from "react-modal";
import { PostModalContext } from "../../contexts/postModal";
import { Button } from "../button";
import { LogoutButton } from "../button/LogOut";
import { MdClose } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

interface PostModalProps {
  isOpen: boolean;
}

export function PostModal({ isOpen }: PostModalProps) {
  const { setIsModalOpen } = useContext(PostModalContext);

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#353431a2",
        },
        content: {
          maxWidth: "45rem",
          maxHeight: "50rem",
          position: "absolute",
          left: 0,
          right: 0,
          margin: "auto",
          backgroundColor: "#353431",
          border: "none",
          boxShadow: "#0000008b 0px 0px 6px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <a
        onClick={() => setIsModalOpen(false)}
        className="absolute right-4 top-4 text-4xl cursor-pointer text-white"
      >
        <MdClose />
      </a>
      <form className="flex flex-col w-full h-full justify-center items-center">
        <textarea className="w-4/5 h-4/5 bg-darkGray/50 text-white resize-none outline-none p-5" />
        <div className="flex w-4/5 justify-between relative top-8 text-white text-xl">
          <a className="flex gap-2 items-center cursor-pointer select-none hover:bg-darkGray/50 p-2 rounded transition">
            <FaTrash />
            <span>Delete Post</span>
          </a>
          <div className="flex gap-2">
            <LogoutButton customContent>Cancel</LogoutButton>
            <Button>Save Changes</Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
