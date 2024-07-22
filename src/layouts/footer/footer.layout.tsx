import { FC } from 'react';
import * as SC from './footer.styles';
import { BiLeaf } from 'react-icons/bi';
import { FaBeer } from 'react-icons/fa';

const contactInfoList = [
  {
    id: 1,
    icon: FaBeer,
    value: 'This is the contact',
  },
  {
    id: 2,
    icon: FaBeer,
    value: 'This is the contact',
  },
  {
    id: 3,
    icon: FaBeer,
    value: 'This is the contact',
  },
];

const sectionsList = [
  {
    title: 'Our Company',
    links: [
      {
        title: 'About Us',
        goTo: '/',
      },
      {
        title: 'Our Team',
        goTo: '/',
      },
      {
        title: 'Company Info',
        goTo: '/',
      },
      {
        title: 'Gallery',
        goTo: '/',
      },
    ],
  },
  {
    title: 'Our Company',
    links: [
      {
        title: 'About Us',
        goTo: '/',
      },
      {
        title: 'Our Team',
        goTo: '/',
      },
      {
        title: 'Company Info',
        goTo: '/',
      },
      {
        title: 'Gallery',
        goTo: '/',
      },
    ],
  },
  {
    title: 'Our Company',
    links: [
      {
        title: 'About Us',
        goTo: '/',
      },
      {
        title: 'Our Team',
        goTo: '/',
      },
      {
        title: 'Company Info',
        goTo: '/',
      },
      {
        title: 'Gallery',
        goTo: '/',
      },
    ],
  },
];

const Footer: FC = () => {
  return (
    <SC.Footer>
      <section>
        <SC.GridSection>
          <img src="/src/assets/images/home/322412271_2318204071679802_4134667702766926568_n.png" />
          <h3>Tabara Master Education</h3>
          <p>We make adventure dreams come true.</p>
          <SC.ContactInfoList>
            {contactInfoList.map((contact, idx) => (
              <li key={idx}>
                <contact.icon size={20} />
                <p>{contact.value}</p>
              </li>
            ))}
          </SC.ContactInfoList>
        </SC.GridSection>
        {sectionsList.map((section, sectionId) => (
          <SC.GridSection key={sectionId}>
            <h2>{section.title}</h2>
            {section.links.map((item, linkId) => (
              <li key={linkId}>
                <BiLeaf size={'2rem'} />
                <SC.Link to="/">{item.title}</SC.Link>
              </li>
            ))}
          </SC.GridSection>
        ))}
      </section>
      <p>Tabara Master Education @ 2024 All rights reserved</p>
    </SC.Footer>
  );
};

export default Footer;
