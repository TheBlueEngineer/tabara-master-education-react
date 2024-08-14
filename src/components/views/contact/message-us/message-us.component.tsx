import MessageUsForm from '@components/smart/contact/message-us-form.component';
import * as SC from './message-us.styles';

const MessageUs = () => {
  return (
    <>
      <SC.Container>
        <MessageUsForm />
        <SC.Information>
          <h1>Message Us</h1>
          <h2>We will answer every question you have</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </SC.Information>
      </SC.Container>
      <SC.DivideSVG />
    </>
  );
};

export default MessageUs;
