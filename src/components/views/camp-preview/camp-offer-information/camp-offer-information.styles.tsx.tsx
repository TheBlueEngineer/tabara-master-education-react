import { border, shadows, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;

  h2 {
    ${typography.size.lg};
    ${typography.weight.semibold};
    color: ${({ theme }) => theme.colors.gray950};
  }

  h3 {
    ${typography.weight.medium};
    ${typography.size.base};
    color: ${({ theme }) => theme.colors.gray900};
  }

  svg,
  li::marker {
    color: ${({ theme }) => theme.colors.green800};
  }

  label,
  li,
  p {
    color: ${({ theme }) => theme.colors.gray700};
  }

  & > * {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }
`;

export const DetailsGrid = styled.ul`
  display: grid;
  width: 100%;
  padding: ${spacing['16px']} 0;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${spacing['24px']};
  column-gap: ${spacing['32px']};

  li {
    grid-row: span 1;
    grid-column: span 1;
    column-gap: ${spacing['8px']};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const WhatToExpect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${spacing['32px']} 0;
  row-gap: ${spacing['16px']};

  ul {
    list-style: disc inside none;
  }
`;

export const Itinerary = styled.div``;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${spacing['32px']} 0;
  row-gap: ${spacing['16px']};

  p {
    ${typography.size.base};
    ${typography.weight.default};
  }
`;

export const DescriptionGrid = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  row-gap: ${spacing['16px']};
`;

export const DescriptionGridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${spacing['8px']};
`;

export const DescriptionPrices = styled(DescriptionGridItem)<{
  $isIncluded?: boolean;
}>`
  && li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    column-gap: ${spacing['8px']};
  }
  && svg {
    color: ${({ theme, $isIncluded = false }) =>
      $isIncluded ? theme.colors.green700 : theme.colors.red800};
  }
`;

export const BookingInformation = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: ${spacing['16px']};
  border-radius: ${border.radius.xs};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  box-shadow: ${shadows.elevation.sm};

  label {
    display: block;
    padding: 0;
    ${typography.size.base};
  }

  li {
    display: flex;
    flex-direction: column;
    row-gap: ${spacing['8px']};
    padding: ${spacing['8px']} 0;
    margin: 0 ${spacing['32px']};

    p {
      ${typography.weight.medium};
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  li:not(first-child) > p {
    ${typography.size.base};
    ${typography.weight.medium};
  }

  li:not(last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
  }

  li:first-child {
    padding: ${spacing['16px']} ${spacing['32px']};
    margin: 0;
  }

  li:first-child > p:first-of-type {
    ${typography.size.xl};
    ${typography.weight.semibold};
  }

  li:first-child > p:nth-of-type(2) {
    font-style: italic;
    color: ${({ theme }) => theme.colors.gray500};
    ${typography.weight.default};
  }

  li:last-child {
    padding-bottom: ${spacing['24px']};

    p {
      font-style: italic;
      ${typography.size.base};
      ${typography.weight.default};
      color: ${({ theme }) => theme.colors.gray500};
    }

    button {
      width: 100%;
      padding: ${spacing['8px']} 0;
      border-radius: ${border.radius.xs};
      ${typography.size.lg};
      ${typography.weight.semibold};
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.green700};
      box-shadow: ${shadows.elevation.sm};
      cursor: pointer;
    }
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: flex-end;

  button {
    ${typography.size.base};

    background-color: transparent;
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    width: 2rem;
    text-align: center;
    ${typography.weight.semibold};
    ${typography.size.base};
  }
`;

export const WhyBookWithUs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${spacing['16px']};
  border-radius: ${border.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  box-shadow: ${shadows.elevation.sm};
`;
