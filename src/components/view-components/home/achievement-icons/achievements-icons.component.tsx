import Icon from '@components/shared-components/icons/icon.component';
import * as SC from './achievements-icons.styles';
import { BiWalk } from 'react-icons/bi';
const list = [
  {
    icon: BiWalk,
    title: '200+',
    subtitle: 'Hiking trails',
  },
  {
    icon: BiWalk,
    title: '200+',
    subtitle: 'Hiking trails',
  },
  {
    icon: BiWalk,
    title: '200+',
    subtitle: 'Hiking trails',
  },
  {
    icon: BiWalk,
    title: '200+',
    subtitle: 'Hiking trails',
  },
];

const AchievementIcons = () => {
  return (
    <SC.Container>
      {list &&
        list.map((item) => (
          <SC.IconCard>
            <SC.IconWrapper>
              <Icon IconComponent={item.icon} size={'large'} />
            </SC.IconWrapper>
            <SC.Title>{item.title}</SC.Title>
            <SC.Subtitle>{item.subtitle}</SC.Subtitle>
          </SC.IconCard>
        ))}
    </SC.Container>
  );
};

export default AchievementIcons;
