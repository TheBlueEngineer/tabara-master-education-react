import { FC } from 'react';
import * as SC from './member-card.styles';
import { IconType } from 'react-icons';

type SocialMediaLink = {
  id: number;
  icon: IconType;
  linkUrl: string;
};

export type TeamMemberCardProps = {
  id?: number;
  name: string;
  imageUrl: string;
  profession: string;
  description: string;
  links: SocialMediaLink[];
};

const TeamMemberCard: FC<TeamMemberCardProps> = ({
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
                <link.icon size={'1.25rem'} />
              </SC.LinkButton>
            ))}
          </SC.Links>
        )}
      </SC.Content>
    </SC.Container>
  );
};

export default TeamMemberCard;
