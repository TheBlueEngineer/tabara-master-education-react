import { FaBeer } from 'react-icons/fa';
import * as SC from './camp-activities.styles';
import CampActivityCard from '@components/templates/camp-activity-card/camp-activity-card.component';

const listOfActivities = [
  {
    id: 1,
    title: 'Art',
    quote: 'This is a very emotional quote about the subject.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    icon: FaBeer,
  },
  {
    id: 2,
    title: 'Art',
    quote: 'This is a very emotional quote about the subject.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    icon: FaBeer,
  },
  {
    id: 3,
    title: 'Art',
    quote: 'This is a very emotional quote about the subject.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    icon: FaBeer,
  },
  {
    id: 4,
    title: 'Art',
    quote: 'This is a very emotional quote about the subject.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    icon: FaBeer,
  },
  {
    id: 5,
    title: 'Art',
    quote: 'This is a very emotional quote about the subject.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    icon: FaBeer,
  },
  {
    id: 6,
    title: 'Art',
    quote: 'This is a very emotional quote about the subject.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    icon: FaBeer,
  },
];

const CampActivities = () => {
  return (
    <SC.Container>
      {listOfActivities.map((activity) => (
        <CampActivityCard
          key={activity.id}
          icon={activity.icon}
          title={activity.title}
          quote={activity.quote}
          description={activity.description}
        />
      ))}
    </SC.Container>
  );
};

export default CampActivities;
