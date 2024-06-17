import styled from 'styled-components';

type ColorPaletteProps = {
  $hsl: string;
};

export const Wrapper = styled.div`
  width: 100%;
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url('/src/assets/images/home/hero_image.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const ColorPalette = styled.div<ColorPaletteProps>`
  background-color: ${(props) => props.$hsl};
  width: 11rem;
  height: 15rem;
`;
