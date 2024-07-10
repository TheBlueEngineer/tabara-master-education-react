import Icon from '@components/shared-components/icons/icon.component';
import * as SC from './achievements-icons.styles';
import { BiWalk } from 'react-icons/bi';
const list = [
  {
    id: 1,
    icon: BiWalk,
    title: '200+',
    subtitle: 'Hiking trails',
  },
  { id: 2, icon: BiWalk, title: '200+', subtitle: 'Hiking trails' },
  { id: 3, icon: BiWalk, title: '200+', subtitle: 'Hiking trails' },
  { id: 4, icon: BiWalk, title: '200+', subtitle: 'Hiking trails' },
];

const AchievementIcons = () => {
  return (
    <SC.Container>
      <SC.Overlay />
      {list &&
        list.map((item) => (
          <SC.IconCard key={item.id}>
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
