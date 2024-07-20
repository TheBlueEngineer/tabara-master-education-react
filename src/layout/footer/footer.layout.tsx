import { FC } from 'react';
import * as SC from './footer.styles';
import Icon from '@components/shared-components/icons/icon.component';
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
      <SC.Grid>
        <SC.GridSection>
          <SC.List>
            <SC.Logo src="/src/assets/images/home/322412271_2318204071679802_4134667702766926568_n.png" />
            <SC.LogoTitle>Tabara Master Education</SC.LogoTitle>
            <SC.LogoDescription>
              We make adventure dreams come true.
            </SC.LogoDescription>
            <SC.ContactInfoList>
              {contactInfoList.map((contact) => (
                <SC.ContactInfoItem>
                  <Icon IconComponent={contact.icon} size={20} />
                  <SC.ContactText>{contact.value}</SC.ContactText>
                </SC.ContactInfoItem>
              ))}
            </SC.ContactInfoList>
          </SC.List>
        </SC.GridSection>
        {sectionsList.map((section, sectionId) => (
          <SC.GridSection key={sectionId}>
            <SC.SectionTitle>{section.title}</SC.SectionTitle>
            <SC.List>
              {section.links.map((item, linkId) => (
                <SC.Item key={linkId}>
                  <Icon IconComponent={BiLeaf} size={32} />
                  <SC.Link to="/">{item.title}</SC.Link>
                </SC.Item>
              ))}
            </SC.List>
          </SC.GridSection>
        ))}
      </SC.Grid>
      <SC.BottomBar>
        Tabara Master Education @ 2024 All rights reserved
      </SC.BottomBar>
    </SC.Footer>
  );
};

export default Footer;
