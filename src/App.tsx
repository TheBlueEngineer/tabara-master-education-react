import { I18nextProvider } from 'react-i18next';
import './App.css';
import { GlobalStyle } from './global.styles';
import RoutesTree from './routes/routes-tree.component';
import i18n from './utils/i18n';

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <RoutesTree />
      </I18nextProvider>
    </>
  );
};

export default App;
