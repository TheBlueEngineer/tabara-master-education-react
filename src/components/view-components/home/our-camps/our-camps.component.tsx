import CampOfferCard from '@components/templates/camp-offer-card/camp-offer-card.component';
import * as SC from './our-camps.styles';
import branCastleImage from 'assets/images/home/campoffer1.jpg';

type CampOfferCardType = {
  title: string;
  description: string;
  price: number;
  src: string;
};

const campOfferCardsList: CampOfferCardType[] = [
  {
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: 54,
    src: branCastleImage,
  },
  {
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: 78,
    src: branCastleImage,
  },
  {
    title: 'Vacanta castelul Bran',
    description:
      'Lorem Ipsum sin dolor bla la care va sa zica asta e de descriere pentru castelul bran vai ce misto suna omg tare',
    price: 121,
    src: branCastleImage,
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
