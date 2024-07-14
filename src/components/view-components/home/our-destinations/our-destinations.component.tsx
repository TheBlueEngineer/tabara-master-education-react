import { FC } from 'react';
import * as SC from './our-destinations.styles';

const destinationsList = [
  {
    id: 1,
    title: 'Castelul Bran',
    imageUrl: '/src/assets/images/home/b_munti3.webp',
    toursCount: 5,
    colSpan: 1,
  },
  {
    id: 2,
    title: 'Castelul Bran',
    imageUrl: '/src/assets/images/home/b_munti3.webp',
    toursCount: 5,
    colSpan: 1,
  },
  {
    id: 3,
    title: 'Castelul Bran',
    imageUrl: '/src/assets/images/home/b_munti3.webp',
    toursCount: 5,
    colSpan: 2,
  },
];

const OurDestinations: FC = () => {
  return (
    <SC.Container>
      <SC.Title>Our Destinations</SC.Title>
      <SC.Subtitle>
        Explore the greatest locations our camp has to offer
      </SC.Subtitle>
      <SC.List>
        {destinationsList.map((destination) => (
          <SC.Destination
            $src={destination.imageUrl}
            $colSpan={destination.colSpan}
            key={destination.id}
          >
            <SC.ImageTitle>{destination.title}</SC.ImageTitle>
            <SC.ToursCount>{destination.toursCount}</SC.ToursCount>
          </SC.Destination>
        ))}
      </SC.List>
    </SC.Container>
  );
};

export default OurDestinations;
