import { FC } from 'react';
import * as SC from './thumbnail.styles';
import { useModal } from 'src/context/modal.context';
import { FaMagnifyingGlass } from 'react-icons/fa6';

type ThumbnailProps = {
  src: string;
  alt: string;
  modalSrc: string;
};

const Thumbnail: FC<ThumbnailProps> = ({ src, alt, modalSrc }) => {
  const { openModal } = useModal();

  return (
    <SC.Container>
      <SC.Thumbnail src={src} alt={alt} />
      <SC.Overlay onClick={() => openModal(modalSrc)}>
        <SC.IconWrapper>
          <FaMagnifyingGlass />
        </SC.IconWrapper>
      </SC.Overlay>
    </SC.Container>
  );
};

export default Thumbnail;
