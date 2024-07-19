import { FC } from 'react';
import * as SC from './member-card.styles';
import { IconType } from 'react-icons';
import Icon from '@components/shared-components/icons/icon.component';

type SocialMediaLink = {
  id: number;
  icon: IconType;
  linkUrl: string;
};

export type MemberCardProps = {
  id?: number;
  name: string;
  imageUrl: string;
  profession: string;
  description: string;
  links: SocialMediaLink[];
};

const MemberCard: FC<MemberCardProps> = ({
  name = 'John Doe',
  profession = 'Profession',
  description = 'This is a default description.',
  imageUrl,
  links = [],
}) => {
  return (
    <SC.Container>
      <SC.Content>
        <SC.Frame $src={imageUrl} />
        <SC.Name>{name}</SC.Name>
        <SC.Profession>{profession}</SC.Profession>
        <SC.Description>{description}</SC.Description>
        {links.length > 0 && (
          <SC.Links>
            {links.map((link) => (
              <SC.LinkButton key={link.id}>
                <Icon IconComponent={link.icon} size={20} />
              </SC.LinkButton>
            ))}
          </SC.Links>
        )}
      </SC.Content>
    </SC.Container>
  );
};

export default MemberCard;
