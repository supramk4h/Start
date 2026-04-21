import { useModal } from "../context/ModalContext";
import Modal from "./Modal";

export default function ModalWrapper() {
  const { modalState, closeModal } = useModal();

  return (
    <Modal 
      isOpen={modalState.isOpen}
      onClose={closeModal}
      title={modalState.data?.title || ""}
      content={modalState.data?.content || ""}
      image={modalState.data?.image}
      tech={modalState.data?.tech}
      type={modalState.data?.type}
    />
  );
}
