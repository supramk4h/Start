import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalData {
  title: string;
  content: string;
  image?: string;
  tech?: string[];
  type?: 'service' | 'project' | 'feedback';
}

interface ModalContextType {
  modalState: {
    isOpen: boolean;
    data: ModalData | null;
  };
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    data: ModalData | null;
  }>({
    isOpen: false,
    data: null,
  });

  const openModal = (data: ModalData) => {
    setModalState({ isOpen: true, data });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalState({ isOpen: false, data: null });
    document.body.style.overflow = 'auto';
  };

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
