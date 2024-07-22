import { FC } from 'react';
import * as SC from './modal.styles';
import { TbCircleX } from 'react-icons/tb';

type ImageModalProps = {
  isOpen: boolean;
  src: string;
  onClose: () => void;
};

const ImageModal: FC<ImageModalProps> = ({ isOpen, src, onClose }) => {
  return (
    <SC.ModalOverlay $isOpen={isOpen} onClick={onClose}>
      <SC.CloseButton onClick={onClose}>
        <TbCircleX />
      </SC.CloseButton>
      <SC.ModalContent onClick={(e) => e.stopPropagation()}>
        <SC.Image src={src} alt="modal content" />
      </SC.ModalContent>
    </SC.ModalOverlay>
  );
};

export default ImageModal;
