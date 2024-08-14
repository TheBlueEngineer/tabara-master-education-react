import { FC } from 'react';
import * as SC from './vertical-list.styles';
import { GiHotMeal } from 'react-icons/gi';

const itineraryMap = [
  {
    day: 'Day 1',
    title: 'Castel si apoi prin alta parte',
    description: 'Lorem ipsum sin dolor bat valarina de na.',
    details: [
      {
        icon: GiHotMeal,
        description: 'Meals included: 2',
      },
    ],
  },
  {},
  {},
];

const VerticalList: FC = () => {
  return (
    <SC.Container>
      <h2>Itinerary</h2>
      <SC.List>
        {itineraryMap.map((item, idx) => (
          <SC.ListItem key={idx}>
            <SC.Header>
              <span>{item.day}</span>
              <h3>{': ' + item.title}</h3>
            </SC.Header>
            <SC.Details>
              {item.details &&
                item.details.map((detail, idx) => (
                  <li key={idx}>
                    <detail.icon />
                    {detail.description}
                  </li>
                ))}
            </SC.Details>
            <SC.Content>{item.description}</SC.Content>
          </SC.ListItem>
        ))}
      </SC.List>
    </SC.Container>
  );
};

export default VerticalList;
