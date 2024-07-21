import { FC } from 'react';
import * as SC from './our-destinations.styles';

const destinationsList = [
  {
    id: 1,
    title: 'Castelul Bran',
    imageUrl: '/src/assets/images/home/hero_image.jpg',
    toursCount: 5,
    colSpan: 1,
  },
  {
    id: 2,
    title: 'Castelul Bran',
    imageUrl: '/src/assets/images/home/hero_image.jpg',
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
  {
    id: 4,
    title: 'Castelul Bran',
    imageUrl: '/src/assets/images/home/b_munti3.webp',
    toursCount: 5,
    colSpan: 2,
  },
  {
    id: 5,
    title: 'Castelul Bran',
    imageUrl: '/src/assets/images/home/hero_image.jpg',
    toursCount: 5,
    colSpan: 1,
  },
  {
    id: 6,
    title: 'Castelul Bran',
    imageUrl: '/src/assets/images/home/hero_image.jpg',
    toursCount: 5,
    colSpan: 1,
  },
];

const OurDestinations: FC = () => {
  return (
    <SC.Container>
      <h1>Our Destinations</h1>
      <h2>Explore the greatest locations our camp has to offer</h2>
      <ul>
        {destinationsList.map((destination) => (
          <SC.Destination
            $src={destination.imageUrl}
            $colSpan={destination.colSpan}
            key={destination.id}
          >
            <h3>{destination.title}</h3>
            <p>{destination.toursCount} + Tours</p>
          </SC.Destination>
        ))}
      </ul>
    </SC.Container>
  );
};

export default OurDestinations;
