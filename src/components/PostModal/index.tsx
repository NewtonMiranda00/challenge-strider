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
      className="max-w-lg bg-lightGray absolute inset-0"
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
