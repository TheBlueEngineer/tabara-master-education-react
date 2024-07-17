import { FC } from 'react';
import * as SC from './our-team.styles';
import MemberCard, {
  MemberCardProps,
} from '@components/templates/member-card/member-card.component';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const membersList: MemberCardProps[] = [
  {
    id: 1,
    name: 'John Bobby Doe',
    imageUrl: '/src/assets/images/home/profile.png',
    profession: 'Professional Guide',
    description:
      'This is the fascinating description of one of the members of the team, very, very, deep.',
    links: [
      {
        id: 1,
        icon: FaFacebook,
        linkUrl: 'https://www.google.ro/',
      },
      {
        id: 2,
        icon: FaInstagram,
        linkUrl: 'https://www.google.ro/',
      },
      {
        id: 3,
        icon: FaLinkedin,
        linkUrl: 'https://www.google.ro/',
      },
    ],
  },
  {
    id: 2,
    name: 'John Bobby Doe',
    imageUrl: '/src/assets/images/home/profile.png',
    profession: 'Professional Guide',
    description:
      'This is the fascinating description of one of the members of the team, very, very, deep.',
    links: [],
  },
  {
    id: 3,
    name: 'John Bobby Doe',
    imageUrl: '/src/assets/images/home/profile.png',
    profession: 'Professional Guide',
    description:
      'This is the fascinating description of one of the members of the team, very, very, deep.',
    links: [],
  },
  {
    id: 4,
    name: 'John Bobby Doe',
    imageUrl: '/src/assets/images/home/profile.png',
    profession: 'Professional Guide',
    description:
      'This is the fascinating description of one of the members of the team, very, very, deep.',
    links: [],
  },
];

const OurTeam: FC = () => {
  return (
    <SC.Container>
      <SC.Title>Our Team</SC.Title>
      <SC.Subtitle>Meet the members of Master Education</SC.Subtitle>
      <SC.List>
        {membersList.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            profession={member.profession}
            imageUrl={member.imageUrl}
            description={member.description}
            links={member.links}
          />
        ))}
      </SC.List>
    </SC.Container>
  );
};

export default OurTeam;
