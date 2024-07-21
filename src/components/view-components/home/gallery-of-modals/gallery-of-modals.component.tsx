import { FC } from 'react';
import * as SC from './gallery-of-modals.styles';
import Thumbnail from '@components/shared-components/thumbnail/thumbnail.component';

const modalImagesList = [
  {
    src: '/src/assets/images/home/art.webp',
    alt: 'Imagine cu pietre',
    modalSrc: '/src/assets/images/home/art.webp',
  },
  {
    src: '/src/assets/images/home/art.webp',
    alt: 'Imagine cu pietre',
    modalSrc: '/src/assets/images/home/art.webp',
  },
  {
    src: '/src/assets/images/home/art.webp',
    alt: 'Imagine cu pietre',
    modalSrc: '/src/assets/images/home/art.webp',
  },
  {
    src: '/src/assets/images/home/art.webp',
    alt: 'Imagine cu pietre',
    modalSrc: '/src/assets/images/home/art.webp',
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
