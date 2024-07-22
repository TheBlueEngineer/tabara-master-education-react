import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: ${spacing['4px']};

  & > svg {
    color: ${({ theme }) => theme.colors.green50};
  }

  & > h3 {
    position: relative;
    ${typography.weight.extrabold};
    color: ${({ theme }) => theme.colors.green50};
    margin-bottom: ${spacing['4px']};
    padding-bottom: ${spacing['2px']};

    &::after {
      content: '';
      position: absolute;
      width: 50%;
      left: 25%;
      bottom: 0;
      height: 1px;
      border: 1px solid ${({ theme }) => theme.colors.green400};
    }
  }

  & > p {
    ${typography.weight.medium};
    color: ${({ theme }) => theme.colors.green100};
    text-align: center;
  }
`;
