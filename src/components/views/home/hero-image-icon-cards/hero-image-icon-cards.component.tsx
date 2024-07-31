import IconCard from '@components/templates/icon-card/icon-card.component';
import * as SC from './hero-image-icon-cards.styles';
import { FC } from 'react';
import { FaGraduationCap, FaHiking, FaTree } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { FaCampground } from 'react-icons/fa6';

type IconCardType = {
  title: string;
  description: string;
  icon: IconType;
};

const iconCardsList: IconCardType[] = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    description: 'Learn essential skills for personal development',
  },
  {
    icon: FaHiking,
    title: 'Hikings',
    description: 'Experience the great outdoors with our guided hikes',
  },
  {
    icon: FaCampground,
    title: 'Camping',
    description: 'Camp in the heart of nature in our guided tours',
  },
  {
    icon: FaTree,
    title: 'Outdoor Activities',
    description: 'Experience the great outdoors and have fun while at it',
  },
];

const HeroImageIconCards: FC = () => {
  return (
    <SC.Wrapper>
      <SC.Container>
        {iconCardsList &&
          iconCardsList.map((iconCard, idx) => (
            <IconCard
              key={idx}
              Icon={iconCard.icon}
              title={iconCard.title}
              description={iconCard.description}
            />
          ))}
      </SC.Container>
    </SC.Wrapper>
  );
};

export default HeroImageIconCards;
