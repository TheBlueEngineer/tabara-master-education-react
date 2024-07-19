import { FC } from 'react';
import * as SC from './contact-us.styles';
import ContactForm from '@components/smart-components/contact-form/contact-form.component';
import { IconType } from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import Icon from '@components/shared-components/icons/icon.component';

type ContactInfo = {
  id: number;
  icon: IconType;
  value: string;
};

const contactInfoList: ContactInfo[] = [
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

const ContactUs: FC = () => {
  return (
    <SC.Container>
      <ContactForm />
      <SC.Content>
        <SC.Title>Booking Journey</SC.Title>
        <SC.Subtitle>
          Join the <SC.Span>adventure</SC.Span> right now !
        </SC.Subtitle>
        <SC.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </SC.Description>
        <SC.ContactInfo>
          <SC.ContactInfoTitle>Contact or Visit Us</SC.ContactInfoTitle>
          <SC.ContactInfoList>
            {contactInfoList.map((contactInfo) => (
              <SC.ContactInfoItem key={contactInfo.id}>
                <Icon IconComponent={contactInfo.icon} size={24} />
                <SC.ContactText>{contactInfo.value}</SC.ContactText>
              </SC.ContactInfoItem>
            ))}
          </SC.ContactInfoList>
        </SC.ContactInfo>
      </SC.Content>
    </SC.Container>
  );
};

export default ContactUs;
