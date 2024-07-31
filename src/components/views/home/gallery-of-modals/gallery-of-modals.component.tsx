import { FC } from 'react';
import * as SC from './gallery-of-modals.styles';
import Thumbnail from '@components/smart/shared/thumbnail/thumbnail.component';

import thumbnailImage from 'assets/images/home/art.webp';

const modalImagesList = [
  {
    src: thumbnailImage,
    alt: 'Imagine cu pietre',
    modalSrc: thumbnailImage,
  },
  {
    src: thumbnailImage,
    alt: 'Imagine cu pietre',
    modalSrc: thumbnailImage,
  },
  {
    src: thumbnailImage,
    alt: 'Imagine cu pietre',
    modalSrc: thumbnailImage,
  },
  {
    src: thumbnailImage,
    alt: 'Imagine cu pietre',
    modalSrc: thumbnailImage,
  },
];

const GalleryOfModals: FC = () => {
  return (
    <SC.Container>
      {modalImagesList.map((image, idx) => (
        <Thumbnail
          key={idx}
          src={image.src}
          alt={image.alt}
          modalSrc={image.modalSrc}
        />
      ))}
    </SC.Container>
  );
};

export default GalleryOfModals;
