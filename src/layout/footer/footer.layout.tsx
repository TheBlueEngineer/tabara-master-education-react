import { FC } from 'react';
import * as SC from './footer.styles';
import Icon from '@components/shared-components/icons/icon.component';
import { BiLeaf } from 'react-icons/bi';

const Footer: FC = () => {
  return (
    <SC.Footer>
      <SC.Grid>
        <SC.GridSection>
          <SC.SectionTitle>Our Company</SC.SectionTitle>
          <SC.List>
            <SC.Item>
              <Icon IconComponent={BiLeaf} size={16} />
              Link to the location
            </SC.Item>
          </SC.List>
        </SC.GridSection>
        <SC.GridSection></SC.GridSection>
        <SC.GridSection></SC.GridSection>
        <SC.GridSection></SC.GridSection>
      </SC.Grid>
      <SC.BottomBar>
        Tabara Master Education @ 2024 All rights reserved
      </SC.BottomBar>
    </SC.Footer>
  );
};

export default Footer;
