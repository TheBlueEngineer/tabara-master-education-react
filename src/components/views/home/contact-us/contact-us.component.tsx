import { FC } from 'react';
import * as SC from './contact-us.styles';
import ContactForm from '@components/smart/home/contact-form/contact-form.component';
import { IconType } from 'react-icons';
import { FaBeer } from 'react-icons/fa';

type ContactInfo = {
  icon: IconType;
  value: string;
};

const contactInfoList: ContactInfo[] = [
  {
    icon: FaBeer,
    value: 'This is the contact',
  },
  {
    icon: FaBeer,
    value: 'This is the contact',
  },
  {
    icon: FaBeer,
    value: 'This is the contact',
  },
];

const ContactUs: FC = () => {
  return (
    <SC.Container>
      <ContactForm />
      <SC.Content>
        <h1>Booking Journey</h1>
        <h2>
          Join the <span>adventure</span> right now !
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <h3>Contact or Visit Us</h3>
        <SC.ContactInfoList>
          {contactInfoList.map((contactInfo, idx) => (
            <li key={idx}>
              <contactInfo.icon size={'1.5rem'} />
              <p>{contactInfo.value}</p>
            </li>
          ))}
        </SC.ContactInfoList>
      </SC.Content>
    </SC.Container>
  );
};

export default ContactUs;
