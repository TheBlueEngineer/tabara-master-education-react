import * as SC from './about-us.styles';
import { FaBeer } from 'react-icons/fa';
import beachImage from 'assets/images/home/Mettlach_Uebernachten_in_Portaledges_im_Baum_mit_Blick_auf_die_Saarschleife.jpg';

const list = [
  {
    text: 'We are truly one of the best camps in the world. Like no questions asked.',
  },
  {
    text: 'We are truly one of the best camps in the world. Like no questions asked.',
  },
  {
    text: 'We are truly one of the best camps in the world. Like no questions asked.',
  },
  {
    text: 'We are truly one of the best camps in the world. Like no questions asked.',
  },
];

const AboutUs = () => {
  return (
    <SC.Container>
      <SC.Images>
        <img src={beachImage} alt="Image on the left" />
        <img src={beachImage} alt="Image on the left" />
        <img src={beachImage} alt="Image on the left" />
      </SC.Images>

      <SC.Information>
        <h1>About us</h1>
        <h2>
          Experience the wonderful <span>Nature</span> Together With Us
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <SC.List>
          {list &&
            list.map((item, idx) => (
              <li key={idx}>
                <FaBeer size={'1.5rem'} />
                <p>{item.text}</p>
              </li>
            ))}
        </SC.List>
      </SC.Information>
    </SC.Container>
  );
};

export default AboutUs;
