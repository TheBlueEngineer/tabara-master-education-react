import { FaBeer } from 'react-icons/fa';
import * as SC from './camp-activities.styles';
import CampActivityCard from '@components/templates/camp-activity-card/camp-activity-card.component';
import { BiBrush } from 'react-icons/bi';
import { GiBallerinaShoes } from 'react-icons/gi';

const listOfActivities = [
  {
    id: 1,
    title: 'Arta',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: BiBrush,
  },
  {
    id: 2,
    title: 'Dans',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: GiBallerinaShoes,
  },
  {
    id: 3,
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    id: 4,
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    id: 5,
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    id: 6,
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    id: 7,
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    id: 8,
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
];

const CampActivities = () => {
  return (
    <SC.Container>
      <SC.Title>Our Activities</SC.Title>
      <SC.Subtitle>Discover our adventures initiatives</SC.Subtitle>
      <SC.ListContainer>
        {listOfActivities.map((activity) => (
          <CampActivityCard
            key={activity.id}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
          />
        ))}
      </SC.ListContainer>
    </SC.Container>
  );
};

export default CampActivities;
