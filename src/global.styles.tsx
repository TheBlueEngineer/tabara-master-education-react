import { spacing } from '@consts/template.const';
import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
        font-family: 'Roboto', Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-size: 16px;
    }

    html, body{
        height: 100%;
        margin: 0px;
        padding: 0px;
    }

    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
    -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, 
    dl, dt, dd, ol, ul, li, 
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video,select, option, input, textarea{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    
    /* Preventing Chrome's blue background on autocomplete to occur.*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
    }
    
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
    }

    button {
        outline: 0;
        border: 0;
    }

    input:focus, textarea:focus{
        outline: none;
    }

    select, option, input{
        padding: 0.1rem;
    }

    h1,h2,h3,h4{
        text-align: center;
    }

    h1{
        font-size: 2.5rem;
        font-weight: 900;
    }

    h2{
        font-size: 2.1rem;
        font-weight: 700;
    }

    h3{
        font-size: 1.6rem;
        font-weight: 600;
    }

    h4{
        font-size: 1.2rem;
        font-weight: 500;
    }

    p{
        font-size: 1rem;
        font-weight: 400;
    }    
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewSection = styled.section<{ $bgImageUrl?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${spacing['128px']} 20% ${spacing['128px']} 20%;
  row-gap: ${spacing['32px']};
  column-gap: ${spacing['32px']};
  ${({ $bgImageUrl }) =>
    $bgImageUrl
      ? css`
          background-image: url($bgImageUrl);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
        `
      : null}
`;
