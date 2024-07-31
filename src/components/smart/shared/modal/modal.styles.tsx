// src/ImageModal.tsx
import { typography } from '@consts/template.const';
import styled from 'styled-components';

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  position: fixed;
  justify-content: center;
  justify-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.8);
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  z-index: 11;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  & > svg {
    ${typography.size.xl3};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
