import { FC } from 'react';
/* import { useTranslation } from 'react-i18next';
 */ import * as SC from './camps.styles';
import OurCamps from '@components/views/home/our-camps/our-camps.component';

const CampsPage: FC = () => {
  /*   const { t } = useTranslation('camps');
   */ return (
    <SC.Wrapper>
      <OurCamps />
    </SC.Wrapper>
  );
};

export default CampsPage;
