import styled from 'styled-components';
import { FaChevronCircleDown } from 'react-icons/fa';
import { spacing, typography } from '@consts/template.const';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ButtonHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${spacing['16px']};
  border-bottom: 2px solid ${({ theme }) => theme.colors.green800};
  background-color: ${({ theme }) => theme.colors.white};

  p {
    ${typography.weight.medium};
    ${typography.size.md};
  }
`;

export const Icon = styled(FaChevronCircleDown)<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 300ms ease-out;
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: ${({ $isOpen }) => ($isOpen ? '100%' : '0')};
  transition: height 300ms ease-out;
  overflow: hidden;

  p {
    padding: ${spacing['16px']};
  }
`;
