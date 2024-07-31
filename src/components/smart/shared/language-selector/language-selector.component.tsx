import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as SC from './language-selector.styles';

const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
    console.log(i18n.language);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <SC.Dropdown onChange={handleChangeLanguage} value={i18n.language}>
      <SC.Option value="ro">RO</SC.Option>
      <SC.Option value="en">EN</SC.Option>
    </SC.Dropdown>
  );
};

export default LanguageSelector;
