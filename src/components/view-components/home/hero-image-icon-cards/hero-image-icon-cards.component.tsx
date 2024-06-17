import IconCard from '@components/templates/icon-card/icon-card.component';
import * as SC from './hero-image-icon-cards.styles';
import { FC } from 'react';
import { FaBeer } from 'react-icons/fa';

const IconCardsArray = [
  {
    id: 1,
    iconComponent: <FaBeer size={30} />,
    title: 'Icon Title #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 2,
    iconComponent: <FaBeer size={30} />,
    title: 'Icon Title #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 3,
    iconComponent: <FaBeer size={30} />,
    title: 'Icon Title #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    id: 4,
    iconComponent: <FaBeer size={30} />,
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
            iconComponent={iconCard.iconComponent}
            title={iconCard.title}
            description={iconCard.description}
          />
        ))}
    </SC.HeroImageIconCards>
  );
};

export default HeroImageIconCards;
