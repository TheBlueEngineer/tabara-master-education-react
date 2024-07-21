import { FaBeer } from 'react-icons/fa';
import * as SC from './why-choose-us.styles';

const listItems = [
  {
    title: 'Natural Immersion',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam.',
    icon: FaBeer,
  },
  {
    title: 'Natural Immersion',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam.',
    icon: FaBeer,
  },
  {
    title: 'Natural Immersion',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam.',
    icon: FaBeer,
  },
];

const WhyChooseUs = () => {
  return (
    <SC.Container>
      <SC.Information>
        <h1>Why Choose Us</h1>
        <h2>Experience an Unforgetable Adventure With Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ul>
          {listItems.map((item, idx) => (
            <SC.Item key={idx}>
              <div>
                <item.icon size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </SC.Item>
          ))}
        </ul>
      </SC.Information>
    </SC.Container>
  );
};

export default WhyChooseUs;
