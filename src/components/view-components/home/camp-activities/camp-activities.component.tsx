import { FaBeer } from 'react-icons/fa';
import * as SC from './camp-activities.styles';
import CampActivityCard from '@components/templates/camp-activity-card/camp-activity-card.component';
import { BiBrush } from 'react-icons/bi';
import { GiBallerinaShoes } from 'react-icons/gi';
import { IconType } from 'react-icons';

type Activity = {
  title: string;
  description: string;
  icon: IconType;
};

const activitiesList: Activity[] = [
  {
    title: 'Arta',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: BiBrush,
  },
  {
    title: 'Dans',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: GiBallerinaShoes,
  },
  {
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
  {
    title: 'Art',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    icon: FaBeer,
  },
];

const CampActivities = () => {
  return (
    <SC.Container>
      <h1>Our Activities</h1>
      <h2>Discover our adventures initiatives</h2>
      <ul>
        {activitiesList.map((activity, idx) => (
          <CampActivityCard
            key={idx}
            Icon={activity.icon}
            title={activity.title}
            description={activity.description}
          />
        ))}
      </ul>
    </SC.Container>
  );
};

export default CampActivities;
