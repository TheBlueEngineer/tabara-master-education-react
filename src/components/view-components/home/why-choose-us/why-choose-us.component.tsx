import { FaBeer } from 'react-icons/fa';
import * as SC from './why-choose-us.styles';
import Icon from '@components/shared-components/icons/icon.component';

const listItems = [
  {
    id: 1,
    title: 'Natural Immersion',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam.',
    icon: FaBeer,
  },
  {
    id: 2,
    title: 'Natural Immersion',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam.',
    icon: FaBeer,
  },
  {
    id: 3,
    title: 'Natural Immersion',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam.',
    icon: FaBeer,
  },
];

const WhyChooseUs = () => {
  return (
    <SC.Container>
      <SC.Overlay>
        <SC.Title>Why Choose Us</SC.Title>
        <SC.Subtitle>Experience an Unforgetable Adventure With Us</SC.Subtitle>
        <SC.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </SC.Description>
        <SC.List>
          {listItems.map((item) => (
            <SC.RowItem key={item.id}>
              <SC.RowItemFrame>
                <Icon IconComponent={item.icon} size={24} />
              </SC.RowItemFrame>
              <SC.Column>
                <SC.RowItemTitle>{item.title}</SC.RowItemTitle>
                <SC.RowItemDescription>
                  {item.description}
                </SC.RowItemDescription>
              </SC.Column>
            </SC.RowItem>
          ))}
        </SC.List>
      </SC.Overlay>
    </SC.Container>
  );
};

export default WhyChooseUs;
