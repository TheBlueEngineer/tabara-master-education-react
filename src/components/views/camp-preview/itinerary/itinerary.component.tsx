import { FC } from 'react';
import * as SC from './itinerary.styles';

const itineraryList = ['hi', 'hello', 'there'];

const Itinerary: FC = () => {
  return (
    <SC.Container>
      <SC.List>
        {itineraryList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </SC.List>
    </SC.Container>
  );
};

export default Itinerary;
