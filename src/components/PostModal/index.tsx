import { useContext } from "react";
import Modal from "react-modal";
import { PostModalContext } from "../../contexts/postModal";
import { Button } from "../button";
import { LogoutButton } from "../button/LogOut";

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
        },
      }}
    >
      <form>
        <button onClick={() => setIsModalOpen(false)}>close modal</button>
        <textarea />
        <LogoutButton>Cancel</LogoutButton>
        <Button>Save Changes</Button>
      </form>
    </Modal>
  );
}
