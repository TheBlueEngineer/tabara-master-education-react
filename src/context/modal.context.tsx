import ImageModal from '@components/smart-components/modal/modal.component';
import { createContext, FC, ReactNode, useContext, useState } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextProps = {
  isOpen: boolean;
  src: string;
  openModal: (src: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('');

  const openModal = (src: string) => {
    setSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSrc(src);
  };

  return (
    <ModalContext.Provider value={{ isOpen, src, openModal, closeModal }}>
      <ImageModal isOpen={isOpen} src={src} onClose={closeModal} />
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used inside the ModalProvider');
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ModalProvider, useModal };
