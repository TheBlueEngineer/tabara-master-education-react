import { FC } from 'react';
import * as SC from './subscribe-newsletter.styles';

const SubscribeNewsletter: FC = () => {
  return (
    <SC.Container>
      <SC.Title>Our next adventure awaits you</SC.Title>
      <SC.Subtitle>Don't miss the wonders of Bran Castle</SC.Subtitle>
      <SC.Description>This is the description</SC.Description>
    </SC.Container>
  );
};

export default SubscribeNewsletter;
