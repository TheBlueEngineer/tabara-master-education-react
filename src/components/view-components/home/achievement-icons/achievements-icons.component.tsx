import * as SC from './achievements-icons.styles';
import { BiWalk } from 'react-icons/bi';
const achievementsList = [
  {
    icon: BiWalk,
    title: '200+',
    subtitle: 'Hiking trails',
  },
  { icon: BiWalk, title: '200+', subtitle: 'Hiking trails' },
  { icon: BiWalk, title: '200+', subtitle: 'Hiking trails' },
  { icon: BiWalk, title: '200+', subtitle: 'Hiking trails' },
];

const AchievementIcons = () => {
  return (
    <SC.Container>
      {achievementsList &&
        achievementsList.map((achievement, idx) => (
          <SC.IconCard key={idx}>
            <div>
              <achievement.icon size={'3rem'} />
            </div>
            <h2>{achievement.title}</h2>
            <p>{achievement.subtitle}</p>
          </SC.IconCard>
        ))}
    </SC.Container>
  );
};

export default AchievementIcons;
