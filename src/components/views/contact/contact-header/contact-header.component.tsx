import { FC } from 'react';
import * as SC from './contact-header.styles';
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

const contactInfoList = [
  {
    icon: FaPhoneVolume,
    title: 'Phone',
    list: ['+40 777 666 555', '+40 777 666 444', '+40 777 666 333'],
  },
  {
    icon: FaLocationDot,
    title: 'Address',
    list: ['Boulevard 1 Nr. 30 bis, Bucharest, Romania'],
  },
  {
    icon: MdOutlineEmail,
    title: 'E-mail',
    list: ['mastereducation@gmail.com', 'tabaramastereducation@gmail.com'],
  },
];

const ContactHeader: FC = () => {
  return (
    <>
      <SC.Container>
        <h1>Contact us !</h1>
        <h2>
          Get in touch with our team and learn more about Master Education !
        </h2>
        <SC.List>
          {contactInfoList.map((info, idx) => (
            <li key={idx}>
              <SC.Frame>
                <info.icon />
              </SC.Frame>
              <h3>{info.title}</h3>
              <SC.InfoList>
                {info.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </SC.InfoList>
            </li>
          ))}
        </SC.List>
      </SC.Container>
    </>
  );
};

export default ContactHeader;
