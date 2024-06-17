import Icon from '@components/shared-components/icons/icon.component';
import * as SC from './about-us.styles';
import { FaBeer } from 'react-icons/fa';

const list = [
  {
    icon: FaBeer,
    text: 'We are truly one of the best camps in the world. Like no questions asked.',
  },
  {
    icon: FaBeer,
    text: 'We are truly one of the best camps in the world. Like no questions asked.',
  },
  {
    icon: FaBeer,
    text: 'We are truly one of the best camps in the world. Like no questions asked.',
  },
  {
    icon: FaBeer,
    text: 'We are truly one of the best camps in the world. Like no questions asked.',
  },
];

const AboutUs = () => {
  return (
    <SC.HomeAboutUsContainer>
      <SC.ImagesContainer>
        <SC.ImageBoxLeft>
          <SC.Image
            src={
              '/src/assets/images/home/Mettlach_Uebernachten_in_Portaledges_im_Baum_mit_Blick_auf_die_Saarschleife.jpg'
            }
            alt="Image on the left"
          />
        </SC.ImageBoxLeft>
        <SC.ImageBoxRight>
          {' '}
          <SC.Image
            src={
              '/src/assets/images/home/Mettlach_Uebernachten_in_Portaledges_im_Baum_mit_Blick_auf_die_Saarschleife.jpg'
            }
            alt="Image on the left"
          />{' '}
          <SC.Image
            src={
              '/src/assets/images/home/Mettlach_Uebernachten_in_Portaledges_im_Baum_mit_Blick_auf_die_Saarschleife.jpg'
            }
            alt="Image on the left"
          />
        </SC.ImageBoxRight>
      </SC.ImagesContainer>

      <SC.InformationContainer>
        <SC.Row>
          <Icon IconComponent={FaBeer} size="large" />
          <SC.Title>About us</SC.Title>
        </SC.Row>
        <SC.Subtitle>Experience Nature Together With Us</SC.Subtitle>
        <SC.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SC.Description>
        <SC.List>
          {list &&
            list.map((item) => (
              <SC.ListItem>
                <Icon IconComponent={item.icon} size="medium" />
                <SC.Text>{item.text}</SC.Text>
              </SC.ListItem>
            ))}
        </SC.List>
      </SC.InformationContainer>
    </SC.HomeAboutUsContainer>
  );
};

export default AboutUs;
