import ContactHeader from '@components/views/contact/contact-header/contact-header.component';
import Faq from '@components/views/contact/faq/faq.component';
import MessageUs from '@components/views/contact/message-us/message-us.component';

const ContactPage = () => {
  return (
    <>
      <ContactHeader />
      <MessageUs />
      <Faq />
    </>
  );
};

export default ContactPage;
