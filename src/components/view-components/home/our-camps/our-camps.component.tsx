import CampOfferCard from '@components/templates/camp-offer-card/camp-offer-card.component';
import * as SC from './our-camps.styles';

type CampOfferCardType = {
  title: string;
  description: string;
  price: string;
  src: string;
};

const campOfferCardsList: CampOfferCardType[] = [
  {
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: '$54.99',
    src: './src/assets/images/home/campoffer1.jpg',
  },
  {
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: '$54.99',
    src: './src/assets/images/home/campoffer1.jpg',
  },
  {
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: '$54.99',
    src: './src/assets/images/home/campoffer1.jpg',
  },
];

const OurCamps = () => {
  return (
    <SC.Container>
      <h1>Our camps</h1>
      <h2>Embark on an adventure with us !</h2>
      <SC.Offers>
        {campOfferCardsList.map((item, idx) => (
          <CampOfferCard
            key={idx}
            title={item.title}
            description={item.description}
            price={item.price}
            src={item.src}
          />
        ))}
      </SC.Offers>
    </SC.Container>
  );
};

export default OurCamps;
