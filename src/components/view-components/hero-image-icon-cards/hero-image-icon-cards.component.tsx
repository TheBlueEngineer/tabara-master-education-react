import IconCard from '@components/templates/icon-card/icon-card.component';
import * as SC from './hero-image-icon-cards.styles';
import { FC } from 'react';

const IconCardsArray = [
  {
    id: 1,
    iconURL: 'icon#1',
    title: 'Icon Title #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 2,
    iconURL: 'icon#1',
    title: 'Icon Title #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 3,
    iconURL: 'icon#1',
    title: 'Icon Title #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 4,
    iconURL: 'icon#1',
    title: 'Icon Title #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
];

const HeroImageIconCards: FC = () => {
  return (
    <SC.HeroImageIconCards>
      {IconCardsArray &&
        IconCardsArray.map((iconCard) => (
          <IconCard
            key={iconCard.id}
            iconUrl={iconCard.iconURL}
            title={iconCard.title}
            description={iconCard.description}
          />
        ))}
    </SC.HeroImageIconCards>
  );
};

export default HeroImageIconCards;
