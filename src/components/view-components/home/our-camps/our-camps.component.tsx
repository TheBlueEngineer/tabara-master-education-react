import CampOfferCard from '@components/templates/camp-offer-card/camp-offer-card.component';
import * as SC from './our-camps.styles';

const campOfferCardsList = [
  {
    id: 1,
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: '$54.99',
    imageURL: './src/assets/images/home/campoffer1.jpg',
  },
  {
    id: 2,
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: '$54.99',
    imageURL: './src/assets/images/home/campoffer1.jpg',
  },
  {
    id: 3,
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: '$54.99',
    imageURL: './src/assets/images/home/campoffer1.jpg',
  },
];

const OurCamps = () => {
  return (
    <SC.Container>
      <SC.Title>Our camps</SC.Title>
      <SC.Subtitle>Embark on an adventure with us !</SC.Subtitle>
      <SC.Offers>
        {campOfferCardsList.map((item) => (
          <CampOfferCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            imageURL={item.imageURL}
          />
        ))}
      </SC.Offers>
    </SC.Container>
  );
};

export default OurCamps;
