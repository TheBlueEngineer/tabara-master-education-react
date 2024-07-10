import { FC } from 'react';
import * as SC from './image.styles';

type ImageProps = {
  src: string;
  alt?: string;
};

const Image: FC<ImageProps> = ({ src, alt }) => {
  return <SC.StyledImage $src={src} alt={alt} />;
};

export default Image;
