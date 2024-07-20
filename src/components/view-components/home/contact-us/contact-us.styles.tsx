import { spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray50};
  padding: ${spacing['96px']} 7.5%;
  column-gap: ${spacing['64px']};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: ${spacing['32px']};
`;

export const Form = styled.div`
  display: flex;
`;

export const FormItem = styled.div``;

export const FormLabel = styled.label``;

export const FormInput = styled.input``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.h1`
  position: relative;
  ${typography.size.xl2};
  ${typography.weight.bold};
  font-family: 'Roboto Condensed', sans-serif;
  color: ${({ theme }) => theme.colors.green800};
  margin-bottom: ${spacing['8px']};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 75%;
    height: 1px;
    border: 1px solid ${({ theme }) => theme.colors.green900};
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.green800};
`;

export const Subtitle = styled.h2`
  ${typography.size.xl3};
  ${typography.weight.bold};
  margin-bottom: ${spacing['16px']};
`;

export const Description = styled.p`
  ${typography.size.base};
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: ${spacing['16px']};
`;

export const ContactInfo = styled.div``;

export const ContactInfoTitle = styled.h3`
  ${typography.size.xl};
  margin-bottom: ${spacing['8px']};
  color: ${({ theme }) => theme.colors.black};
`;

export const ContactInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${spacing['8px']};
`;

export const ContactInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  column-gap: ${spacing['8px']};
  color: ${({ theme }) => theme.colors.green800};
`;

export const ContactText = styled.p`
  ${typography.size.md};
  color: ${({ theme }) => theme.colors.gray800};
`;
